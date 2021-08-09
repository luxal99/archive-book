import { EntityRepository, Repository } from "typeorm";
import { Document } from "../entity/Document";

@EntityRepository(Document)
export class DocumentRepository extends Repository<Document> {

}
