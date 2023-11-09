import { OAuth2Client, TokenPayload } from "google-auth-library";
import { UserAttributes } from "../database/models/Users";

export class GoogleService {
  
  private webClientOAuth: OAuth2Client;
  private androidClientOAuth: OAuth2Client;
  private webClientToken: string;
  private androidClientToken: string;

  constructor() {
    this.webClientToken = process.env.GOOGLE_WEB_CLIENT_ID || "google token";
    this.androidClientToken = process.env.GOOGLE_ANDROID_CLIENT_ID || "google token";
    this.webClientOAuth = new OAuth2Client(this.webClientToken);
    this.androidClientOAuth = new OAuth2Client(this.androidClientToken);
  }

  async verifyWeb(token: string): Promise<UserAttributes | undefined> {
    const ticket = await this.webClientOAuth.verifyIdToken({
      idToken: token,
      audience: this.webClientToken
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

  async verifyAndroid(token: string): Promise<UserAttributes | undefined> {
    const ticket = await this.androidClientOAuth.verifyIdToken({
      idToken: token,
      audience: this.androidClientToken
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