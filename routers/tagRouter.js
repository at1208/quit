import { Router } from "express";
const router = Router();
import { createTag } from "../controllers/tagController";
import { createTagSchemaValidator } from "../validators/tagSchemaValidator";
import { requireSignin } from "../controllers/userController";
router.post("/tag", requireSignin, createTagSchemaValidator, createTag);

export default router;
