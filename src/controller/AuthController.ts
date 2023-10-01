import { Request, Response } from "express";
import { AuthService } from "../service/AuthService";

const authService = new AuthService();

export const loginGoogle = async (request: Request, response: Response) => {

  try {
    const result = authService.login(request.body);

    response.status(200).json(result);
  } catch (error) {
    console.error('controller', error);
    response.status(500).json({ error: error});
  }
}