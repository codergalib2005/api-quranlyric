import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import connectDB from "./connect/connectDB";
const app = express();

// all router
import postRouter from "./resources/posts/post.route";

// middlewares
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// main page
app.get("/", (req, res) => {
  res.status(200).send("Hello, World!");
});

// use routes
app.use("/api/v1/posts", postRouter);

export default app;
