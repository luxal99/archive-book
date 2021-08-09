import { EntityRepository, Repository } from "typeorm";
import { ArchiveBook } from "../entity/ArchiveBook";

@EntityRepository(ArchiveBook)
export class ArchiveBookRepository extends Repository<ArchiveBook> {

}
