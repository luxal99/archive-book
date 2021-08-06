import {EntityRepository, Repository} from "typeorm";
import {Mark} from "../entity/Mark";

@EntityRepository(Mark)
export class MarkRepository extends Repository<Mark> {

}
