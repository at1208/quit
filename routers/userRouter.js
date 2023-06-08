const express = require("express");
const router = express.Router();
const { singup, signin } = require("../controllers/userController");
const {
  signupSchemaValidator,
  signinSchemaValdator,
} = require("../validators/singupSchemaValidator");

router.post("/signup", signupSchemaValidator, singup);
router.post("/signin", signinSchemaValdator, signin);

module.exports = router;
