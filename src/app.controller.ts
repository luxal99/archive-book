import { Controller, Get, Render } from "@nestjs/common";
import { AppService } from "./app.service";
import { LocationService } from "./server/resources/location/location.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private locationService: LocationService) {
  }

  @Get()
  @Render("index")
  async root() {
    return { listOfLocations: await this.locationService.findAll() };
  }

  @Get("login")
  @Render("pages/login")
  login() {
  }
}
