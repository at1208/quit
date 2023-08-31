import Category from "../models/categorySchema";
import slugify from "slugify";
import { errorHandler } from "../utils/dbErrorHandler";

export async function createCategory(req, res) {
  const { name } = req.body;
  let slug = slugify(name);
  try {
    let category = await Category({ name, slug }).save();
    return res.json({
      message: `Category '${category.name}' created successfully`,
    });
  } catch (error) {
    res.status(400).json({
      error: errorHandler(error),
    });
  }
}
