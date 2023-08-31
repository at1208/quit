import { Schema, model } from "mongoose";

const tagSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    url: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export default model("Tag", tagSchema);
