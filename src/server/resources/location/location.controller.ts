import { Controller } from "@nestjs/common";
import { LocationService } from "./location.service";
import { GenericController } from "../../util/generic/generic.controller";
import { Location } from "../../entity/Location";

@Controller("location")
export class LocationController extends GenericController<Location> {
  constructor(genericService: LocationService) {
    super(genericService);
  }
}
