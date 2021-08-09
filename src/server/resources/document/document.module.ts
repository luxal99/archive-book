import { Module } from "@nestjs/common";
import { DocumentService } from "./document.service";
import { DocumentController } from "./document.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DocumentRepository } from "../../repository/DocumentRepository";

@Module({
  imports: [TypeOrmModule.forFeature([DocumentRepository])],
  controllers: [DocumentController],
  providers: [DocumentService],
})
export class DocumentModule {
}
