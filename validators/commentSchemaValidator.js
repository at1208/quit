import Joi from "joi";

const commentSchema = Joi.object().keys({
  postId: Joi.required(),
  userId: Joi.required(),
  content: Joi.string().required(),
});

export function createCommentSchemaValidator(req, res, next) {
  const reqData = req.body;
  const validationResult = commentSchema.validate(reqData);
  if (validationResult.error) {
    return res.status(400).json({
      error: validationResult.error.details[0].message.replace(/\\|"/g, ""),
    });
  } else {
    next();
  }
}
