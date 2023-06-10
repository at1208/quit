import { Router } from "express";
const router = Router();
import { createCategory } from "../controllers/categoryController";
import { createCategorySchemaValidator } from "../validators/categorySchemaValidator";

router.post("/category", createCategorySchemaValidator, createCategory);

export default router;
