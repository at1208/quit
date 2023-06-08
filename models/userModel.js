const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      max: 30,
      min: 2,
      required: true,
    },
    email: {
      type: String,
      max: 50,
      required: true,
      unique: true,
    },
    hashedPassword: {
      type: String,
      max: 400,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
