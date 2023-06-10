import Tag from "../models/tagSchema";
import slugify from "slugify";
import { errorHandler } from "../utils/dbErrorHandler";

export async function createTag(req, res) {
  const { name } = req.body;
  let slug = await slugify(name);
  try {
    let tag = await Tag({ name, slug }).save();
    return res.json({
      message: `Tag '${tag.name}' created successfully`,
    });
  } catch (error) {
    res.status(400).json({
      error: errorHandler(error),
    });
  }
}
