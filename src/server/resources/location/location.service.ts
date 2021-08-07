import { Injectable } from "@nestjs/common";
import { GenericService } from "../../util/generic/generic.service";
import { Location } from "../../entity/Location";
import { LocationRepository } from "../../repository/LocationRepository";

@Injectable()
export class LocationService extends GenericService<Location> {
  constructor(genericRepository: LocationRepository) {
    super(genericRepository, []);
  }
}
