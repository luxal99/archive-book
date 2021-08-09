import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Document {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  public id?: number;

  @Column()
  public name?: string;

  @Column()
  public uri?: string;
}
