import User from "./users.model";
import bcrypt from "bcrypt";
const uuid = require("uuid"); // You can use the 'uuid' library to generate unique tokens
const nodemailer = require("nodemailer");

// Configure Nodemailer to send emails
const transporter = nodemailer.createTransport({
  service: "gmail", // e.g., 'Gmail' or use SMTP settings
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

// Generate a unique token function
function generateUniqueToken() {
  return uuid.v4();
}

// Send magic link email function
function sendMagicLinkEmail(email, token) {
  const mailOptions = {
    from: "coderboygalif@gmail.com",
    to: email,
    subject: "Quran Lyric Login",
    text: `Click the following link to log in: https://docreader.me?token=${token}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
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
export const login = async (req, res) => {
  const { email, password } = req.body;
  // Generate a unique token (e.g., a UUID)
  const token = generateUniqueToken();
  try {
    // Check if the user with the given email exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      // If the user already exists, update their magic link token
      existingUser.magicLinkToken = token;
      await existingUser.save();
    } else {
      // If the user doesn't exist, create a new user record
      await User.create({ email, magicLinkToken: token });
    }
    // Send an email containing the magic link to the user's email address
    sendMagicLinkEmail(email, token);

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
