import { Schema, model } from "mongoose";

const categorySchema = Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export default model("Category", categorySchema);
