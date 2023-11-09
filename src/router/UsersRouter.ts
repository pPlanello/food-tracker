import { Router } from "express";
import { createUsers } from "../controller/UsersController";

const router = Router();

/**
 * @openapi
 * tags:
 *   name: Users
 *   description: The Users managing API
 * /api/users:
 *   post:
 *     summary: Create a new User
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
router.post('/', createUsers);

export default router;