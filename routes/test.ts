import { Router } from "express";
import { check } from "express-validator";
import { test } from "../controller/test";
import { validarCamopo } from "../middlewares/validar-campo";

const router = Router();

router.get(
  "/:id",
  [check("id", "No es un ID valido").isMongoId(), validarCamopo],
  test
);

export default router;
