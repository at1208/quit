const Blog = require("../models/blogSchema");
const slugify = require("slugify");

module.exports.createBlog = async (req, res) => {
  const { title, body, featureImg, postedBy, categories, tags, faqs } =
    req.body;
  let slug = slugify(title?.toLowerCase());
  let mtitle = title;
  let mdesc = body?.slice(0, 180);
  let excerpt = body?.slice(0, 400) + "...";
  try {
    const blog = await Blog({
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
    return res.json(blog);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
