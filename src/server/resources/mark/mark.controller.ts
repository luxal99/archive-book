import { Controller } from "@nestjs/common";
import { MarkService } from "./mark.service";
import { GenericController } from "../../util/generic/generic.controller";
import { Mark } from "../../entity/Mark";

@Controller("mark")
export class MarkController extends GenericController<Mark> {
  constructor(private readonly markService: MarkService) {
    super(markService);
  }
}
