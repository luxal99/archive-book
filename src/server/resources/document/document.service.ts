import { Injectable } from "@nestjs/common";
import { GenericService } from "../../util/generic/generic.service";
import { Document } from "../../entity/Document";
import { DocumentRepository } from "../../repository/DocumentRepository";

@Injectable()
export class DocumentService extends GenericService<Document> {

  constructor(genericRepository: DocumentRepository) {
    super(genericRepository, []);
  }
}
