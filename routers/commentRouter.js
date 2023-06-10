import { Router } from "express";
const router = Router();
import { createComment } from "../controllers/commentController";
import { createCommentSchemaValidator } from "../validators/commentSchemaValidator";

router.post("/comment", createCommentSchemaValidator, createComment);

export default router;
