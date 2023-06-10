import Joi from "joi";

const categorySchema = Joi.object().keys({
  name: Joi.string().required().messages({
    "any.required": "Category name is required",
    "string.empty": "Category name is not allowed to be empty",
  }),
});

export function createCategorySchemaValidator(req, res, next) {
  const reqData = req.body;
  const validationResult = categorySchema.validate(reqData);
  if (validationResult.error) {
    return res.status(400).json({
      error: validationResult.error.details[0].message.replace(/\\|"/g, ""),
    });
  } else {
    next();
  }
}
