import { Router } from "express";
const router = Router();
import { createBlog } from "../controllers/blogController";
import { createBlogSchemaValidator } from "../validators/blogSchemaValidator";
import { requireSignin } from "../controllers/userController";
router.post("/blog", requireSignin, createBlogSchemaValidator, createBlog);

export default router;
