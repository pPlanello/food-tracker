import express, { Application } from "express";
import helloWorld from "../router/hello-world.router";
import { clientConnectionDataBase } from "../database/config.db";

class Server {
  
  listen() {
    this.app.listen(this.port, () => {
      console.log('Server listening on port ', this.port);
    });
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';

    this.configureRoutes();
    clientConnectionDataBase();
  }

  private configureRoutes() {
    this.app.use('/api', helloWorld);
  }

  private app: Application;
  private port: string;
}

export default Server;