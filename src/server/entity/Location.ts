import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Location {

    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    public id: number;
}
