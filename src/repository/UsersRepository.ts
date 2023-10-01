import { Repository } from "typeorm";
import { databaseConnection } from "../database/connection";
import { Users } from "../database/models/Users";



export class UsersRepository {

  private repository: Repository<Users>;

  constructor() {
    this.repository = databaseConnection.getRepository(Users);
  }

  async createUser(user: any) {
    console.log("Creating user", this.repository);
    return this.repository.save(user);
  }

  async findByEmail(email: string): Promise<Users | null> {
    return this.repository.findOneBy({email});
  }
}