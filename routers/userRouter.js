import { Router } from "express";
const router = Router();
import { singup, signin } from "../controllers/userController";
import {
  signupSchemaValidator,
  signinSchemaValdator,
} from "../validators/authSchemaValidator";

router.post("/signup", signupSchemaValidator, singup);
router.post("/signin", signinSchemaValdator, signin);

export default router;
