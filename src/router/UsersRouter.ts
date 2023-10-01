import { Router } from "express";
import { createUsers } from "../controller/UsersController";

const router = Router();

router.post('/', createUsers);

export default router;