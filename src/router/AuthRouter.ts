import { Router } from "express";
import { validFields } from "../middlewares/ValidFields";
import { check } from "express-validator";
import { loginAndroidGoogle, loginWebGoogle } from "../controller/AuthController";

const router = Router();

router.post('/android', [
  check('id_token', 'The id_token is mandatory').not().isEmpty(),
  validFields
], loginAndroidGoogle);

router.post('/web', [
  check('id_token', 'The id_token is mandatory').not().isEmpty(),
  validFields
], loginWebGoogle);

export default router;