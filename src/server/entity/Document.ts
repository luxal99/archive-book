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
    () => ArchiveBook,
    (archiveBook) => archiveBook.listOfDocuments,
    { onDelete: "CASCADE", onUpdate: "CASCADE" },

  )
  @JoinColumn([{ name: "id_archive_book", referencedColumnName: "id" }])
  public idArchiveBook: ArchiveBook;
}
