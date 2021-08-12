import { Injectable } from "@nestjs/common";
import { GenericService } from "../../util/generic/generic.service";
import { ArchiveBook } from "../../entity/ArchiveBook";
import { ArchiveBookRepository } from "../../repository/ArchiveBookRepository";
import { ArchiveBookStatusEnum } from "../../enum/ArchiveBookStatusEnum";
import * as moment from "moment";

@Injectable()
export class ArchiveBookService extends GenericService<ArchiveBook> {

  constructor(private archiveBookRepository: ArchiveBookRepository) {
    super(archiveBookRepository, ["idMark", "idLocation", "listOfDocuments"]);
  }

  async findActiveArchiveBooks() {
   return await this.archiveBookRepository.find({
     relations: this.getRelations,
     where: { status: ArchiveBookStatusEnum.ACTIVE },
   });

  }

  async findClosedArchiveBooks() {
    return await this.archiveBookRepository.find({
      relations: this.getRelations,
      where: { status: ArchiveBookStatusEnum.CLOSED },
    });
  }
}
