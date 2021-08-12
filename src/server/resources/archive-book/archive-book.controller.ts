import { Controller, Delete, HttpStatus, Param, Put, Req, Res } from "@nestjs/common";
import { ArchiveBookService } from "./archive-book.service";
import { GenericController } from "../../util/generic/generic.controller";
import { ArchiveBook } from "../../entity/ArchiveBook";
import { Request, Response } from "express";
import { DocumentService } from "../document/document.service";
import * as moment from "moment";
import { ArchiveBookStatusEnum } from "../../enum/ArchiveBookStatusEnum";

@Controller("archive-book")
export class ArchiveBookController extends GenericController<ArchiveBook> {
  constructor(private readonly archiveBookService: ArchiveBookService,
              private documentService: DocumentService) {
    super(archiveBookService);
  }

  @Delete("/:id")
  async delete(@Req() req: Request, @Param("id") id: number, @Res() res: Response) {
    try {
      const archive = await this.archiveBookService.findOne(id);
      for (let document of archive.listOfDocuments) {
        await this.documentService.deleteFile(document.id);
      }
      await this.archiveBookService.delete(id).then(() => {
        res.sendStatus(HttpStatus.OK);
      });
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send({ err });
    }
  }

  @Put("close/:id")
  async closeArchiveBook(@Param("id") id: number, @Res() res: Response) {
    try {
      const archiveBook = await this.archiveBookService.findOne(id);
      if (moment().isAfter(archiveBook.expirationDate)) {
        archiveBook.status = ArchiveBookStatusEnum.CLOSED;
        res.send(await this.archiveBookService.update(id, archiveBook));

      } else {
        res.status(HttpStatus.NOT_ACCEPTABLE).send({ message: "Current date is before than expiration date" });
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send({ err });
    }
  }

}
