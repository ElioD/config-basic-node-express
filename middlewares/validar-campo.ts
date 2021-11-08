import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validarCamopo = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json(erros);
  }

  next();
};
