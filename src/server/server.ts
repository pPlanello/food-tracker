import * as express from "express";
import { Application } from "express";
import helloWorld from "../router/hello-world.router";
import authRoutes from "../router/AuthRouter";
import usersRoutes from "../router/UsersRouter";
import {databaseConnection} from "../database/connection";

class Server {
  
  listen() {
    this.app.listen(this.port, () => {
      console.log('Server listening on port ', this.port);
    });
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';

    this.middlewares();
    this.configureRoutes();
    this.databaseInit();
  }

  private middlewares() {
    this.app.use(express.json());

    // Public directory
    this.app.use( express.static('public'));
  }

  private configureRoutes() {
    this.app.use('/api', helloWorld);
    this.app.use('/auth', authRoutes);
    this.app.use('/api/users', usersRoutes);
  }

  private async databaseInit() {
    await databaseConnection.initialize();
  }

  private app: Application;
  private port: string;
}

export default Server;