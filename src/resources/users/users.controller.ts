import User from "./users.model";
import bcrypt from "bcrypt";
const uuid = require("uuid"); // You can use the 'uuid' library to generate unique tokens
const nodemailer = require("nodemailer");

// Generate a unique token function
function generateUniqueToken() {
  return uuid.v4();
}

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // check if user exists
    const existsUser = await User.findOne({ email });
    if (existsUser) {
      return res.status(400).json({ msg: "User already exists" });
    }
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    // create user
    const newUser = new User({
      name,
      email,
      password: hash,
    });
    const user = await newUser.save();
    res.status(201).json({
      msg: "User created successfully",
      user,
    });
  } catch (err) {
    console.log(err);
  }
};
import { Request, Response } from "express";

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  // Generate a unique token (e.g., a UUID)
  const token = generateUniqueToken();
  try {
    // Check if the user with the given email exists in the database
    const existingUser = await User.findOne({ email });
    // If the user doesn't exist, return a 400 error
    if (!existingUser) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    // compare password
    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    // If the user exists, generate an access token and a refresh token
    // Save the refresh token in the database
    existingUser.refreshToken = token;
    await existingUser.save();
    // Send refresh & access token back to the user
    res.status(200).json({
      msg: "Login successful",
      refreshToken: token,
      accessToken: existingUser.refreshToken,
    });
    res.json({ message: "Magic link sent successfully" });
  } catch (err) {
    console.log(err);
  }
};
export const googleLogin = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};
