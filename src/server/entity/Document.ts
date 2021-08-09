import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Location } from "./Location";
import { ArchiveBook } from "./ArchiveBook";

@Entity()
export class Document {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  public id?: number;

  @Column()
  public name?: string;

  @Column()
  public uri?: string;
  @Column("int", { name: "id_archive_book" })
  @ManyToOne(
    () => Location,
    (location) => location.listOfMarks,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" },
  )
  @JoinColumn([{ name: "id_archive_book", referencedColumnName: "id" }])
  public idArchiveBook?: ArchiveBook;
}
