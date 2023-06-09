const express = require("express");
const router = express.Router();
const { createBlog } = require("../controllers/blogController");
const {
  createBlogSchemaValidator,
} = require("../validators/blogSchemaValidator");

router.post("/blog", createBlogSchemaValidator, createBlog);

module.exports = router;
