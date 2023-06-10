import Joi from "joi";

const tagSchema = Joi.object().keys({
  name: Joi.string().required(),
});

export function createTagSchemaValidator(req, res, next) {
  const reqData = req.body;
  const validationResult = tagSchema.validate(reqData);
  if (validationResult.error) {
    return res.status(400).json({
      error: validationResult.error.details[0].message.replace(/\\|"/g, ""),
    });
  } else {
    next();
  }
}
