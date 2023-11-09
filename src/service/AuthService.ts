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

  async loginWeb(googleToken: string) {
    // Verify google token
    const user = await this.googleService.verifyWeb(googleToken);
    
    return await this.generateJWTByUser(user);
  }

  async loginAndroid(googleToken: string) {
    // Verify google token
    const user = await this.googleService.verifyAndroid(googleToken);
    
    return await this.generateJWTByUser(user);
  }

  private async generateJWTByUser(user: UserAttributes | undefined) {
    let tokenGeneration;
    let userFind = await this.usersService.findByEmail(user?.email);

    if (userFind == null && user != null) {
      await this.usersService.createUser(user);

      // Generate token
      tokenGeneration = await generateJWT(user.id);
    } else {
      // Generate token
      tokenGeneration = await generateJWT(userFind!.id);
    }
    
    console.log(' ********* tokenGeneration', tokenGeneration);

    return tokenGeneration;
  }

}
