import { Module } from "@nestjs/common";
import { DocumentService } from "./document.service";
import { DocumentController } from "./document.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DocumentRepository } from "../../repository/DocumentRepository";
import { ArchiveBookRepository } from "../../repository/ArchiveBookRepository";
import { ArchiveBookService } from "../archive-book/archive-book.service";

@Module({
  imports: [TypeOrmModule.forFeature([DocumentRepository, ArchiveBookRepository])],
  controllers: [DocumentController],
  providers: [DocumentService, ArchiveBookService],
})
export class DocumentModule {
}
