import express from "express";
import {
  createPost,
  getAllPost,
  getPostById,
  getPostBySlug,
} from "./post.controller";

const router = express.Router();

router.post("/", createPost);
router.get("/", getAllPost);
router.get("/id/:id", getPostById);
router.get("/slug/:slug", getPostBySlug);

export default router;
