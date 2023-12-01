export const createPost = async (req, res) => {
  try {
    res.send("Hello world");
  } catch (err) {
    res.status(202).json({
      msg: "Get server error try!",
    });
  }
};
