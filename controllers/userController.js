const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const fs = require("fs");
const jwt = require("jsonwebtoken");

const privateKey = fs.readFileSync("./private.key", "utf8");

module.exports.singup = async (req, res) => {
  const { name, email, password } = req.body;
  let saltRounds = 10;
  try {
    let hashedPassword = await bcrypt.hash(password, saltRounds);
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        error: "User is already exist",
      });
    }
    await User({ name, email, hashedPassword }).save();
    return res.json({ message: "Signup successful" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports.signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    let result = await bcrypt.compare(password, user.hashedPassword);
    if (!result) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    let token = jwt.sign(
      {
        userId: user._id,
      },
      privateKey,
      {
        expiresIn: "365d",
        algorithm: "RS256",
      }
    );
    return res.json({
      user: { name: user?.name, email: user?.email, userId: user?._id },
      token,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
