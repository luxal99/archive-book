import { Module } from "@nestjs/common";
import { ArchiveBookService } from "./archive-book.service";
import { ArchiveBookController } from "./archive-book.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ArchiveBookRepository } from "../../repository/ArchiveBookRepository";
import { DocumentRepository } from "../../repository/DocumentRepository";
import { DocumentService } from "../document/document.service";

@Module({
  imports: [TypeOrmModule.forFeature([ArchiveBookRepository, DocumentRepository])],
  controllers: [ArchiveBookController],
  providers: [ArchiveBookService, DocumentService],
})
export class ArchiveBookModule {
}
