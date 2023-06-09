const express = require("express");
const router = express.Router();
const { createTag } = require("../controllers/tagController");
const {
  createTagSchemaValidator,
} = require("../validators/tagSchemaValidator");

router.post("/tag", createTagSchemaValidator, createTag);

module.exports = router;
