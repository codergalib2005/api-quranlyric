import mongoose from "mongoose";
import Post from "./post.model";

export const createPost = async (req, res) => {
  try {
    const { title, body, tags } = req.body;

    if (!title || !body || !tags) {
      return res.status(400).json({
        message: "Please provide a title, body and tags",
      });
    }

    const newPost = req.body;

    const post = await Post.create(newPost);
    res.status(201).json(post);
  } catch (err) {
    res.status(202).json({
      msg: "Get server error try!",
    });
  }
};
export const getPostsByTags = async (req, res) => {
  try {
    const tags = req.query.tags;
    const limit = req.query.limit || 15;

    // Split the tags into an array
    const tagArray = tags.split(",");

    const posts = await Post.find({ tags: { $in: tagArray } }).limit(
      parseInt(limit, 10)
    );

    res.status(200).json({
      count: posts.length,
      message: "Posts fetched successfully",
      posts,
    });
  } catch (err) {
    res.status(500).json({
      msg: "Get server error try!",
    });
  }
};
export const getPostById = async (req, res) => {
  try {
    const id = req.params.id;

    // Check if the provided id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        msg: "Invalid post ID",
      });
    }

    const post = await Post.findOne({ _id: id });

    if (!post) {
      return res.status(404).json({
        msg: "Post not found",
      });
    }

    res.status(200).json(post);
  } catch (err) {
    console.error(err);

    // Check if the error is due to an invalid ObjectId
    if (err.name === "CastError") {
      return res.status(400).json({
        msg: "Invalid post ID",
      });
    }

    res.status(500).json({
      msg: "Internal server error",
    });
  }
};
