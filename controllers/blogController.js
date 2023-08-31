import Blog from "../models/blogSchema";
import slugify from "slugify";
import { smartTrim } from "../utils/blog";
import { errorHandler } from "../utils/dbErrorHandler";

export async function createBlog(req, res) {
  const { title, body, featureImg, postedBy, categories, tags, faqs } =
    req.body;
  let slug = slugify(title?.toLowerCase());
  let mtitle = `${title} | ${process.env.APP_NAME || ""}`;
  let mdesc = body.substring(0, 160);
  let excerpt = smartTrim(body, 160, " ", " ...");
  try {
    await Blog({
      title,
      slug,
      body,
      excerpt,
      mtitle,
      mdesc,
      featureImg,
      postedBy,
      categories,
      tags,
      faqs,
    }).save();
    return res.json({
      message: `Blog '${title}' created successfully`,
    });
  } catch (error) {
    res.status(400).json({
      error: errorHandler(error),
    });
  }
}

export async function getBlogs(req, res) {
  User.find()
}
