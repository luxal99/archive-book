import { Controller, Delete, HttpStatus, Param, Post, Req, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { DocumentService } from "./document.service";
import { GenericController } from "../../util/generic/generic.controller";
import { Document } from "../../entity/Document";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from "path";
import { Request, Response } from "express";
import { UPLOAD_PATH } from "../../constant/constant";
import { ArchiveBookService } from "../archive-book/archive-book.service";

@Controller("document")
export class DocumentController extends GenericController<Document> {
  constructor(private readonly documentService: DocumentService,
              private archiveBookService: ArchiveBookService) {
    super(documentService);
  }

  @Post("/:id")
  @UseInterceptors(FileInterceptor("document", {
    storage: diskStorage({
      destination: UPLOAD_PATH,
      filename: (req, file, cb) => {
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join("");
        cb(null, `${randomName}${extname(file.originalname)}`);
      },
    }),
  }))
  async uploadFile(@Req() req: Request, @Res() res: Response, @UploadedFile() file: Express.Multer.File, @Param("id") id: number) {
    try {
      const archiveBook = await this.archiveBookService.findOne(id);
      res.send(await this.documentService.save({
        idArchiveBook: archiveBook,
        name: file.originalname,
        uri: `/documents/${file.filename}`,
      }));
    } catch (err) {
      res.status(HttpStatus.BAD_REQUEST).send({ err });
    }
  }

  @Delete("/:id")
  async delete(@Req() req: Request, @Param("id") id: number, @Res() res: Response) {
    try {
      await this.documentService.deleteFile(id);
      await this.documentService.delete(id).then(() => {
        res.sendStatus(HttpStatus.OK);
      });
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send({ err });
    }

  }
}
