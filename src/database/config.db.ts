import { Client } from 'pg';

export const clientConnectionDataBase = () => {

  const client = new Client({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  });

  client.connect((err) => {
    if (err) {
      console.error(err);
      throw err;
    }
    console.log('Connected to database ', client.database);
  });
}