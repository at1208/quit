import { Router } from "express";
const router = Router();
import { createView } from "../controllers/viewController";
import { createViewSchemaValidator } from "../validators/viewSchemaValidator";
import { requireSignin } from "../controllers/userController";

router.post("/view", requireSignin, createViewSchemaValidator, createView);

export default router;
