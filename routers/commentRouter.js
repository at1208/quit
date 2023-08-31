import { Router } from "express";
const router = Router();
import { createComment } from "../controllers/commentController";
import { createCommentSchemaValidator } from "../validators/commentSchemaValidator";
import { requireSignin } from "../controllers/userController";
router.post(
  "/comment",
  requireSignin,
  createCommentSchemaValidator,
  createComment
);

export default router;
