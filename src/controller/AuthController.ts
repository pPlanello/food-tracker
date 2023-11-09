import { Request, Response } from "express";
import { AuthService } from "../service/AuthService";

const authService = new AuthService();

export const loginWebGoogle = async (request: Request, response: Response) => {

  try {
    const idToken: string = request.body.id_token;
    
    const result = authService.loginWeb(idToken);

    response.status(200).json(result);
  } catch (error) {
    console.error('controller', error);
    response.status(500).json({ error: error});
  }
}

export const loginAndroidGoogle = async (request: Request, response: Response) => {

  try {
    const idToken: string = request.body.id_token;
    
    const result = authService.loginAndroid(idToken);

    response.status(200).json(result);
  } catch (error) {
    console.error('controller', error);
    response.status(500).json({ error: error});
  }
}