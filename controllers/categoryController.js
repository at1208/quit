const Category = require("../models/categorySchema");
const slugify = require("slugify");

module.exports.createCategory = async (req, res) => {
  const { name } = req.body;
  let slug = await slugify(name);
  try {
    let category = await Category({ name, slug }).save();
    return res.json({
      message: `Category '${category.name}' created successfully`,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
