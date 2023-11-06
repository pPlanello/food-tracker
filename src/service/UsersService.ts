import { UserAttributes } from "../database/models/Users";
import { UsersRepository } from "../repository/UsersRepository";

export class UsersService {
  
  private usersRepository: UsersRepository;

  constructor() {
    this.usersRepository = new UsersRepository();
  }

  async createUser(user: UserAttributes) {
    return this.usersRepository.createUser(user);
  }

  async findByEmail(email: string | undefined = '') {
    return this.usersRepository.findByEmail(email);
  }

}