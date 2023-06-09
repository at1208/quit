const Joi = require("joi");

const blogSchema = Joi.object().keys({
  title: Joi.string().required().min(3).max(70),
  body: Joi.string().min(200).required(),
  featureImg: Joi.string().required(),
  postedBy: Joi.required(),
  categories: Joi.array()
    .min(1)
    .items(Joi.string().required().trim().empty(""))
    .required()
    .messages({
      "any.required": "category must contain at least 1 item",
    }),
  tags: Joi.array()
    .min(1)
    .items(Joi.string().required().trim().empty(""))
    .required()
    .messages({
      "any.required": "tag must contain at least 1 item",
    }),
});

module.exports.createBlogSchemaValidator = (req, res, next) => {
  const reqData = req.body;
  const validationResult = blogSchema.validate(reqData);
  if (validationResult.error) {
    return res.status(400).json({
      error: validationResult.error.details[0].message.replace(/\\|"/g, ""),
    });
  } else {
    next();
  }
};
