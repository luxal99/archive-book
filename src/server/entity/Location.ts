import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Mark} from "./Mark";
import { ArchiveBook } from "./ArchiveBook";

@Entity()
export class Location {

    @PrimaryGeneratedColumn({type: "int", name: "id"})
    public id: number;

    @Column()
    public name: string;

    @OneToMany(
        () => Mark,
        (mark) => mark.idLocation
    )
    public listOfMarks!: Mark[];

    @OneToMany(
      () => ArchiveBook,
      (mark) => mark.idLocation
    )
    public listOfArchives!: ArchiveBook[];
}
