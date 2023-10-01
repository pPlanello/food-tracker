import { DataSource } from "typeorm";
import { Users } from "./models/Users";


const hostName: string = process.env.DB_HOST || 'localhost';
const port: number = Number(process.env.DB_PORT) || 4532;
const username: string = process.env.DB_USER || "user";
const password: string = process.env.DB_PASS || "password";
const database: string = process.env.DB_NAME || "database";
const dialect: any = process.env.DIALECT || 'postgres';

export const databaseConnection = new DataSource({
  type: dialect,
  host: hostName,
  port,
  username,
  password,
  database,
  synchronize: true,
  logging: true,
  entities: [Users]
})