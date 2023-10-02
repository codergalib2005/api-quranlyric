import User from "./users.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import objectKeysToString from "../../utils/objectKeysToString";
const uuid = require("uuid"); // You can use the 'uuid' library to generate unique tokens
const nodemailer = require("nodemailer");

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
    // generate token using email user id and secret
    const token = jwt.sign(
      { id: existingUser._id, email: existingUser.email },
      process.env.JWT_SECRET_QURANLYRIC,
      {
        expiresIn: "12d",
      }
    );
    res.json({ message: "Magic link sent successfully", token });
  } catch (err) {
    console.log(err);
  }
};

export const validation = async (req: Request, res: Response) => {
  const user = req.user;
  try {
    // const user = await User.findById(req.user.id).select("-password");

    res.json({ user });
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    if (!data) return res.status(400).json({ msg: "No data to update" });

    // Convert the object keys to a string
    const dataConvertedString = objectKeysToString(data);

    // check if user exists and select the data to update
    const updatedUser = await User.findByIdAndUpdate(req.user.id, data, {
      new: true,
      select: dataConvertedString, // Move the select method here
    });
    res.json({ updatedUser });
  } catch (err) {
    console.log(err);
  }
};
