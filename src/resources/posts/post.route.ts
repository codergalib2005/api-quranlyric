import express from "express";
import { createPost, getAllPost, getPostById } from "./post.controller";

const router = express.Router();

router.post("/", createPost);
router.get("/", getAllPost);
router.get("/id/:id", getPostById);

export default router;
