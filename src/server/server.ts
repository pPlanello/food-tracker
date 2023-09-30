import express, { Application } from "express";
import helloWorld from "../router/hello-world.router";

class Server {
  
  listen() {
    this.app.listen(this.port, () => {
      console.log('Server listening on port ', this.port);
    });
  }

  private configureRoutes() {
    this.app.use('/api', helloWorld)
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';

    this.configureRoutes();
  }

  private app: Application;
  private port: string;
}

export default Server;