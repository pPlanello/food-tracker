import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


interface UserAttributes {
  id: number;
  username: string;
  password: string;
  email: string;
}

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

}