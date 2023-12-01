import express from "express";
import { createPost, getPostsByTags, getPostById } from "./post.controller";

const router = express.Router();

router.post("/", createPost);
router.get("/tags", getPostsByTags);
router.get("/id/:id", getPostById);

export default router;
