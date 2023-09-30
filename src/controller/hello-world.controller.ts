import { Request, Response } from "express";

export const getHelloWorld = (req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    message: 'Hello World'
  })
}