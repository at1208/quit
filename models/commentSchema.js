const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const commentSchema = mongoose.Schema(
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
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
