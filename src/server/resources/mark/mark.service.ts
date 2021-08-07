import { Injectable } from "@nestjs/common";
import { GenericService } from "../../util/generic/generic.service";
import { Mark } from "../../entity/Mark";
import { MarkRepository } from "../../repository/MarkRepository";

@Injectable()
export class MarkService extends GenericService<Mark> {

  constructor(genericRepository: MarkRepository) {
    super(genericRepository, []);
  }
}
