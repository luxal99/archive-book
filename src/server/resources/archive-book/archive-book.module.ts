import { Module } from "@nestjs/common";
import { ArchiveBookService } from "./archive-book.service";
import { ArchiveBookController } from "./archive-book.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ArchiveBookRepository } from "../../repository/ArchiveBookRepository";

@Module({
  imports: [TypeOrmModule.forFeature([ArchiveBookRepository])],
  controllers: [ArchiveBookController],
  providers: [ArchiveBookService],
})
export class ArchiveBookModule {
}
