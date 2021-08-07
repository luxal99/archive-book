import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Mark} from "./Mark";

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
}
