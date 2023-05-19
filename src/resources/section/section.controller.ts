import Section from "./section.model";

const createSection = async (req, res) => {
  try {
    const { name, order, topic } = req.body;

    const newSection = new Section({
      name,
      order,
      topic,
    });

    const saveSection = await newSection.save();
    res.status(201).json({ message: "Section created", data: saveSection });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to create section", err });
  }
};
const getSections = async (req, res) => {
  try {
    console.dir(Section);
    const sections = await Section.find();
    // res.status(200).json({ message: "Data loaded", data: sections });
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve sections", err });
  }
};

const getASection = (req, res) => {};
const updateASection = (req, res) => {};
const deleteASection = (req, res) => {};

export {
  createSection,
  getASection,
  getSections,
  updateASection,
  deleteASection,
};
