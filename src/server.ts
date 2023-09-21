import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import connectDB from "./connect/connectDB";
const app = express();
//
import sections from "./resources/section/section.route";
import doc from "./resources/document/document.route";
import surah from "./resources/surah/surah.route";

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
app.use("/api/v1/sections", sections);
app.use("/api/v1/doc", doc);
app.use("/api/v1/surah", surah);

export default app;
