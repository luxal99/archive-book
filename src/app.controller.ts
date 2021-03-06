import { Controller, Get, Param, Render, Res } from "@nestjs/common";
import { AppService } from "./app.service";
import { LocationService } from "./server/resources/location/location.service";
import { MarkService } from "./server/resources/mark/mark.service";
import { DocumentService } from "./server/resources/document/document.service";
import { ArchiveBookService } from "./server/resources/archive-book/archive-book.service";
import { Response } from "express";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private documentService: DocumentService,
              private locationService: LocationService,
              private markService: MarkService, private archiveBookService: ArchiveBookService) {
  }

  @Get()
  async root(@Res() res: Response) {
    return res.render("index", {
      listOfLocations: await this.locationService.findAll(),
      listOfMarks: await this.markService.findAll(),
      listOfDocuments: await this.documentService.findAll(),
      listOfArchiveBooks: await this.archiveBookService.findActiveArchiveBooks(),
      listOfClosedArchiveBooks: await this.archiveBookService.findClosedArchiveBooks(),
    });
  }

  @Get("login")
  @Render("pages/login")
  login() {
  }

  @Get("overview/:id")
  async archiveOverview(@Res() res: Response, @Param("id") id: number) {
    return res.render("pages/archive-overview", { archive: await this.archiveBookService.findOne(id) });
  }
}
