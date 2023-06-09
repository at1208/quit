const express = require("express");
const router = express.Router();
const { createCategory } = require("../controllers/categoryController");
const {
  createCategorySchemaValidator,
} = require("../validators/categorySchemaValidator");

router.post("/category", createCategorySchemaValidator, createCategory);

module.exports = router;
