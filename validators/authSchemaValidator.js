import Joi from "joi";

const signupSchema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().required().email(),
  password: Joi.string().min(7).max(100).required(),
});

const signinSchema = Joi.object().keys({
  email: Joi.string().required().email(),
  password: Joi.string().min(7).max(100).required(),
});

export function signupSchemaValidator(req, res, next) {
  const reqUser = req.body;
  const validationResult = signupSchema.validate(reqUser);
  if (validationResult.error) {
    return res.status(400).json({
      error: validationResult.error.details[0].message.replace(/\\|"/g, ""),
    });
  } else {
    next();
  }
}

export function signinSchemaValdator(req, res, next) {
  const reqUser = req.body;
  const validationResult = signinSchema.validate(reqUser);
  if (validationResult.error) {
    return res.status(400).json({
      error: validationResult.error.details[0].message.replace(/\\|"/g, ""),
    });
  } else {
    next();
  }
}
