import { Request, Response } from "express";
import { UsersService } from "../service/UsersService";

const usersService = new UsersService();

export const createUsers = async (request: Request, response: Response) => {

  console.log(1)
  try {
    const result = await usersService.createUser(request.body);

    response.status(200).json(result);
  } catch (error) {
    console.error('controller', error);
    response.status(500).json({ error: error});
  }
}