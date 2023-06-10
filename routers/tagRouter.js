import { Router } from "express";
const router = Router();
import { createTag } from "../controllers/tagController";
import { createTagSchemaValidator } from "../validators/tagSchemaValidator";

router.post("/tag", createTagSchemaValidator, createTag);

export default router;
