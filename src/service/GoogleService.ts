import { OAuth2Client, TokenPayload } from "google-auth-library";
import { UserAttributes } from "../database/models/Users";

export class GoogleService {
  
  private clientOAuth: OAuth2Client;
  private clientToken: string;

  constructor() {
    this.clientToken = process.env.GOOGLE_CLIENT_ID || "google token";
    this.clientOAuth = new OAuth2Client(this.clientToken);
  }

  async verify(token: string): Promise<UserAttributes | undefined> {
    const ticket = await this.clientOAuth.verifyIdToken({
      idToken: token,
      audience: this.clientToken
    });

    const payload = ticket.getPayload();
    const user = {} as UserAttributes;
    if (payload) {
      user.id = payload?.sub;
      user.email = payload.email || '';
      user.username = payload.name || '';
    }

    return user;
  }

}