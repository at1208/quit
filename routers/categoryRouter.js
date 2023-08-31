import { Router } from "express";
const router = Router();
import { createCategory } from "../controllers/categoryController";
import { createCategorySchemaValidator } from "../validators/categorySchemaValidator";
import { requireSignin } from "../controllers/userController";
router.post(
  "/category",
  requireSignin,
  createCategorySchemaValidator,
  createCategory
);

export default router;
