import { Controller, Get, Render } from "@nestjs/common";
import { AppService } from "./app.service";
import { LocationService } from "./server/resources/location/location.service";
import { MarkService } from "./server/resources/mark/mark.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private locationService: LocationService, private markService: MarkService) {
  }

  @Get()
  @Render("index")
  async root() {
    return {
      listOfLocations: await this.locationService.findAll(),
      listOfMarks: await this.markService.findAll(),
    };
  }

  @Get("login")
  @Render("pages/login")
  login() {
  }
}
