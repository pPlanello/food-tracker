import { Router } from "express";
import { validFields } from "../middlewares/ValidFields";
import { check } from "express-validator";
import { loginAndroidGoogle, loginWebGoogle } from "../controller/AuthController";

const router = Router();

/**
 * @openapi
 * tags:
 *   name: Auth
 *   description: The Auth managing API
 * /auth/android:
 *   post:
 *     summary: Create a new book
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 *
 */
router.post('/android', [
  check('id_token', 'The id_token is mandatory').not().isEmpty(),
  validFields
], loginAndroidGoogle);

/**
 * @openapi
 * tags:
 *   name: Auth
 *   description: The Auth managing API
 * /auth/web:
 *   post:
 *     summary: Create a new book
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 *
 */
router.post('/web', [
  check('id_token', 'The id_token is mandatory').not().isEmpty(),
  validFields
], loginWebGoogle);

export default router;