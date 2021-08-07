import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Location} from "./Location";

@Entity()
export class Mark {
    @PrimaryGeneratedColumn({type: "int", name: "id"})
    public id: number;

    @Column()
    public name: string;

    @Column("int")
    @ManyToOne(
        () => Location,
        (location) => location.listOfMarks,
        {onDelete: "NO ACTION", onUpdate: "NO ACTION"}
    )
    @JoinColumn([{name: "id_location", referencedColumnName: "id"}])
    public idLocation: Location;
}
