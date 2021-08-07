import { Module } from '@nestjs/common';
import { MarkService } from './mark.service';
import { MarkController } from './mark.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { MarkRepository } from "../../repository/MarkRepository";

@Module({
  imports:[TypeOrmModule.forFeature([MarkRepository])],
  controllers: [MarkController],
  providers: [MarkService]
})
export class MarkModule {}
