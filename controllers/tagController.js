const Tag = require("../models/tagSchema");
const slugify = require("slugify");

module.exports.createTag = async (req, res) => {
  const { name } = req.body;
  let slug = await slugify(name);
  try {
    let tag = await Tag({ name, slug }).save();
    return res.json({
      message: `Tag '${tag.name}' created successfully`,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
