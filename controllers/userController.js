import User from "../models/userModel";
import { hash, compare } from "bcrypt";
import { readFileSync } from "fs";
import jwt from "jsonwebtoken";

const privateKey = readFileSync("./private.key", "utf8");

export async function singup(req, res) {
  const { name, email, password } = req.body;
  let saltRounds = 10;
  try {
    let hashedPassword = await hash(password, saltRounds);
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
}

export async function signin(req, res) {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    let result = await compare(password, user.hashedPassword);
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
    let loggedInUser = {
      name: user?.name,
      email: user?.email,
      userId: user?._id,
    };
    return res.json({
      user: loggedInUser,
      token,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
}

export function requireSignin(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Missing token from the request header" });
  }

  jwt.verify(token, privateKey, (error, decoded) => {
    if (error) {
      return res.status(403).json({ message: "Invalid or expired token." });
    }
    req.user = decoded;
    next();
  });
}
