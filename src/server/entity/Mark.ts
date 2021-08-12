import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Location } from "./Location";
import { ArchiveBook } from "./ArchiveBook";

@Entity()
export class Mark {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  public id: number;

  @Column({ nullable: false })
  public name: string;

  @OneToMany(
    () => ArchiveBook,
    (mark) => mark.idMark,
  )
  public listOfArchives!: ArchiveBook[];

  @Column("int", { name: "id_location", nullable: false })
  @ManyToOne(
    () => Location,
    (location) => location.listOfMarks,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" },
  )
  @JoinColumn([{ name: "id_location", referencedColumnName: "id" }])
  public idLocation: Location;
}
