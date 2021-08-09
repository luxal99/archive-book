import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Location } from "./server/entity/Location";
import { Mark } from "./server/entity/Mark";
import { LocationModule } from "./server/resources/location/location.module";
import { MarkModule } from "./server/resources/mark/mark.module";
import { LocationService } from "./server/resources/location/location.service";
import { LocationRepository } from "./server/repository/LocationRepository";
import { MarkRepository } from "./server/repository/MarkRepository";
import { MarkService } from "./server/resources/mark/mark.service";
import { DocumentModule } from "./server/resources/document/document.module";
import { Document } from "./server/entity/Document";
import { DocumentService } from "./server/resources/document/document.service";
import { DocumentRepository } from "./server/repository/DocumentRepository";
import { ArchiveBook } from "./server/entity/ArchiveBook";
import { ArchiveBookModule } from "./server/resources/archive-book/archive-book.module";
import { ArchiveBookRepository } from "./server/repository/ArchiveBookRepository";
import { ArchiveBookService } from "./server/resources/archive-book/archive-book.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forFeature([LocationRepository,
      MarkRepository, DocumentRepository, ArchiveBookRepository]),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      entities: [Location, Mark, Document, ArchiveBook],
    }),
    LocationModule, MarkModule, DocumentModule, ArchiveBookModule,
  ],
  controllers: [AppController],
  providers: [AppService, LocationService,
    MarkService, DocumentService, ArchiveBookService],
})
export class AppModule {
}
