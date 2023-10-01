import { UsersRepository } from "../repository/UsersRepository";

export class UsersService {
  
  private usersRepository: UsersRepository;

  constructor() {
    this.usersRepository = new UsersRepository();
  }

  async createUser(user: any) {

    const newUser = {
      username: "pablo", password: "password", email: "pablo@gmail.com"
    }

    return this.usersRepository.createUser(newUser);
  }

}