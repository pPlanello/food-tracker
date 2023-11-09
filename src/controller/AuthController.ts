import { Request, Response } from "express";
import { AuthService } from "../service/AuthService";

const authService = new AuthService();

export const loginWebGoogle = async (request: Request, response: Response) => {
    const idToken: string = request.body.id_token;
    
    authService.loginWeb(idToken)
      .then(token => response.status(200).json({token: token}))
      .catch(error => {
        console.error(error);
        response.status(500).json({error: "Internal server error"});
      });
}

export const loginAndroidGoogle = async (request: Request, response: Response) => {
    const idToken: string = request.body.id_token;
    
    authService.loginAndroid(idToken)
      .then(token => response.status(200).json({token: token}))
      .catch(error => {
        console.error(error);
        response.status(500).json({error: "Internal server error"});
      });
}