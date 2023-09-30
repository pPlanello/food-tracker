import { Router } from "express";

import { getHelloWorld } from "../controller/hello-world.controller";

const router = Router();

router.get('/', getHelloWorld);

export default router;