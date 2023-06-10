import Comment from "../models/commentSchema";
import { errorHandler } from "../utils/dbErrorHandler";

export async function createComment(req, res) {
  const { postId, userId, content, repliedTo } = req.body;
  try {
    await Comment({
      postId,
      userId,
      content,
      repliedTo,
    }).save();
    return res.json({
      message: "Comment created successfuly",
    });
  } catch (error) {
    res.status(400).json({
      error: errorHandler(error),
    });
  }
}
