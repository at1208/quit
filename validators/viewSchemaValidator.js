import Joi from "joi";

const viewSchema = Joi.object().keys({
  url: Joi.string().required(),
  userAgent: Joi.required(),
});

export function createViewSchemaValidator(req, res, next) {
  const reqData = req.body;
  const validationResult = viewSchema.validate(reqData);
  if (validationResult.error) {
    return res.status(400).json({
      error: validationResult.error.details[0].message.replace(/\\|"/g, ""),
    });
  } else {
    next();
  }
}
