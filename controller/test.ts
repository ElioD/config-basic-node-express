import { Request, Response } from "express";

export const test = async (req: Request, res: Response) => {
  res.json({
    msg: " Hola perro",
  });
};
