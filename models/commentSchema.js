import { Schema, model } from "mongoose";
const { ObjectId } = Schema;

const commentSchema = Schema(
  {
    postId: {
      type: ObjectId,
      ref: "Blog",
      required: true,
    },
    userId: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      min: 1,
      required: true,
    },
    repliedTo: {
      type: ObjectId,
      ref: "User",
      default: null,
    },
  },
  { timestamps: true }
);

export default model("Comment", commentSchema);
