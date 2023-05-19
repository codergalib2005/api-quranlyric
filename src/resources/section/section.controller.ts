const createSection = (req, res) => {
  try {
    const { name, order } = req.body;
    if (name || order) {
      return res.status(404).json({ message: "All field are required!" });
    }
  } catch (err) {
    res.status(402).json({ message: "Server error" });
  }
};
const getASection = (req, res) => {};
const getSections = (req, res) => {};
const updateASection = (req, res) => {};
const deleteASection = (req, res) => {};

export {
  createSection,
  getASection,
  getSections,
  updateASection,
  deleteASection,
};
