import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Document } from "./Document";
import { Location } from "./Location";
import { Mark } from "./Mark";
import { ArchiveBookStatusEnum } from "../enum/ArchiveBookStatusEnum";

@Entity()
export class ArchiveBook {

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  public id: number;

  @Column("timestamp", {
    name: "created_date",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  public createdDate: Date | null;

  @Column({ nullable: true, length: 10240 })
  note?: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  shelfNo: string;

  @Column({ nullable: false })
  startYear: number;

  @Column({ nullable: false })
  expirationDate: Date;

  @Column({ nullable: false })
  endYear: number;

  @Column({
    type: "enum",
    default: ArchiveBookStatusEnum.ACTIVE,
    enum: ArchiveBookStatusEnum,
  })
  public status: ArchiveBookStatusEnum;

  @OneToMany(
    () => Document,
    (document) => document.idArchiveBook,
  )
  public listOfDocuments: Document[];

  @Column("int", { name: "id_mark" })
  @ManyToOne(
    () => Mark,
    (mark) => mark.listOfArchives,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" },
  )
  @JoinColumn([{ name: "id_mark", referencedColumnName: "id" }])
  public idMark: Mark;


  @Column("int", { name: "id_location" })
  @ManyToOne(
    () => Location,
    (location) => location.listOfMarks,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" },
  )
  @JoinColumn([{ name: "id_location", referencedColumnName: "id" }])
  public idLocation: Location;
}
