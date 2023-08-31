import { Schema, model } from "mongoose";

const viewSchema = Schema(
  {
    url: {
      type: String,
      required: true,
    },
    userAgent: {
      type: {},
      required: true,
    },
  },
  { timestamps: true }
);

export default model("View", viewSchema);
