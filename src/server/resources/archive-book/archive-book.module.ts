import { Module } from "@nestjs/common";
import { ArchiveBookService } from "./archive-book.service";
import { ArchiveBookController } from "./archive-book.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ArchiveBookRepository } from "../../repository/ArchiveBookRepository";
import { DocumentRepository } from "../../repository/DocumentRepository";
import { DocumentService } from "../document/document.service";
import { LocationRepository } from "../../repository/LocationRepository";
import { MarkRepository } from "../../repository/MarkRepository";
import { LocationService } from "../location/location.service";
import { MarkService } from "../mark/mark.service";

@Module({
  imports: [TypeOrmModule.forFeature([ArchiveBookRepository, DocumentRepository, LocationRepository, MarkRepository])],
  controllers: [ArchiveBookController],
  providers: [ArchiveBookService, DocumentService, LocationService, MarkService],
})
export class ArchiveBookModule {
}
