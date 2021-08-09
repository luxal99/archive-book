import { Controller } from "@nestjs/common";
import { ArchiveBookService } from "./archive-book.service";
import { GenericController } from "../../util/generic/generic.controller";
import { ArchiveBook } from "../../entity/ArchiveBook";

@Controller("archive-book")
export class ArchiveBookController extends GenericController<ArchiveBook> {
  constructor(private readonly archiveBookService: ArchiveBookService) {
    super(archiveBookService);
  }
}
