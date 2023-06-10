import { Schema, model } from "mongoose";
const { ObjectId } = Schema;

const blogSchema = Schema(
  {
    title: {
      type: String,
      min: 3,
      max: 400,
      unique: true,
    },
    mtitle: {
      type: String,
      max: 400,
      required: true,
      unique: true,
    },
    mdesc: {
      type: String,
      max: 800,
      required: true,
      unique: true,
    },
    excerpt: {
      type: String,
      required: true,
      max: 1000,
    },
    body: {
      type: String,
      required: true,
      min: 200,
      max: 2000000,
    },
    featureImg: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
    postedBy: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    categories: [
      {
        type: ObjectId,
        ref: "Category",
      },
    ],
    tags: [
      {
        type: ObjectId,
        ref: "Tag",
      },
    ],
    faqs: [
      {
        type: ObjectId,
        ref: "FAQ",
      },
    ],
  },
  { timestamps: true }
);

export default model("Blog", blogSchema);
