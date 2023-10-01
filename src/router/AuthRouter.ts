import { Router } from "express";
import { validFields } from "../middlewares/ValidFields";
import { check } from "express-validator";
import { loginGoogle } from "../controller/AuthController";

const router = Router();

router.post('/', [
  check('id_token', 'The id_token is mandatory').not().isEmpty(),
  validFields
], loginGoogle);

export default router;