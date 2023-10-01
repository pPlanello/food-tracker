import { UserAttributes } from "../database/models/Users";
import { GoogleService } from "./GoogleService";
import { generateJWT } from "./TokenService";
import { UsersService } from "./UsersService";

export class AuthService {
  
  private usersService: UsersService;
  private googleService: GoogleService;

  constructor() {
    this.usersService = new UsersService();
    this.googleService = new GoogleService();
  }

  async login(googleToken: string) {
    let tokenGeneration;
    // Verify google token
    const user = await this.googleService.verify(googleToken);
  
    // Create user if not exist
    let userFind = await this.usersService.findByEmail(user?.email);

    if (userFind == null && user != null) {
      await this.usersService.createUser(user);

      // Generate token
      tokenGeneration = await generateJWT(user.id);
    }

    return tokenGeneration;
  }

}
