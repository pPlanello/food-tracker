import { Entity, Column, PrimaryColumn } from "typeorm";


export interface UserAttributes {
  id: string;
  username: string;
  email: string;
}

@Entity()
export class Users {
  @PrimaryColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

}