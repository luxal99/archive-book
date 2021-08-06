import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Mark {
    @PrimaryGeneratedColumn({type: "int", name: "id"})
    public id: number;
}
