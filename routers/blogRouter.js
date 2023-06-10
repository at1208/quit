import { Router } from "express";
const router = Router();
import { createBlog } from "../controllers/blogController";
import { createBlogSchemaValidator } from "../validators/blogSchemaValidator";

router.post("/blog", createBlogSchemaValidator, createBlog);

export default router;
