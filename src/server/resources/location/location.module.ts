import { Module } from "@nestjs/common";
import { LocationService } from "./location.service";
import { LocationController } from "./location.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LocationRepository } from "../../repository/LocationRepository";

@Module({
  imports: [TypeOrmModule.forFeature([LocationRepository])],
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {
}
