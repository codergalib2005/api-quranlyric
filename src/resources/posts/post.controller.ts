export const createPost = async (req, res) => {
  try {
    res.send("Hello world");
  } catch (err) {
    res.status(202).json({
      msg: "Get server error try!",
    });
  }
};
export const getAllPost = async (req, res) => {
  res.send([]);
};
export const getPostById = async (req, res) => {
  res.send({ content: "single post by id" });
};
export const getPostBySlug = async (req, res) => {
  res.send({ content: "single post by slug" });
};
