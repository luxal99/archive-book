import { Injectable } from "@nestjs/common";
import { GenericService } from "../../util/generic/generic.service";
import { ArchiveBook } from "../../entity/ArchiveBook";
import { ArchiveBookRepository } from "../../repository/ArchiveBookRepository";

@Injectable()
export class ArchiveBookService extends GenericService<ArchiveBook> {

  constructor(genericRepository: ArchiveBookRepository) {
    super(genericRepository, ["idMark", "idLocation", "listOfDocuments"]);
  }
}
