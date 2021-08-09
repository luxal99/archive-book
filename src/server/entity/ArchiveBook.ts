import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Document } from "./Document";

@Entity()
export class ArchiveBook {

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  public id?: number;

  @Column("timestamp", {
    name: "created_date",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  public createdDate!: Date | null;
  @OneToMany(
    () => Document,
    (mark) => mark.idArchiveBook,
  )
  public listOfDocuments?: Document[];
}
