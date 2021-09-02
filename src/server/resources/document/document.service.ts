import { Injectable } from "@nestjs/common";
import { GenericService } from "../../util/generic/generic.service";
import { Document } from "../../entity/Document";
import { DocumentRepository } from "../../repository/DocumentRepository";
import * as fs from "fs";
import { DELETE_PATH } from "../../environment/prod";


@Injectable()
export class DocumentService extends GenericService<Document> {

  constructor(genericRepository: DocumentRepository) {
    super(genericRepository, []);
  }

  async deleteFile(idDocument: number) {
    const documentForDelete = await this.findOne(idDocument);
    fs.unlinkSync(DELETE_PATH + documentForDelete.uri);
  }
}
