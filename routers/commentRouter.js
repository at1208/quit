const express = require("express");
const router = express.Router();
const { createComment } = require("../controllers/commentController");
const {
  createCommentSchemaValidator,
} = require("../validators/commentSchemaValidator");

router.post("/comment", createCommentSchemaValidator, createComment);

module.exports = router;
