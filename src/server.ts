import sections from "./resources/section/section.route";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./connect/connectDB";
const app = express();

// middlewares
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// main page
app.get("/", (req, res) => {
  res.send(`<h2>Blogger Application</h2>`);
});

// use routes
app.use("/api/v1/sections", sections);

export default app;
