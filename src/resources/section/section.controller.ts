import Section from "./section.model";

export const createSection = async (req, res) => {
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
export const getSections = async (req, res) => {
  try {
    const sections = await Section.find();
    res.status(200).json({ message: "Data loaded", data: sections });
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve sections", err });
  }
};

export const getASection = (req, res) => {};
export const updateASection = (req, res) => {};
export const deleteASection = (req, res) => {};

export const newDoc = (req, res) => {
  try {
    const update = Section.findByIdAndUpdate(
      req.body.sectionId,
      { $push: { documents: req.body.docId } },
      { new: true }
    );
    res.status(200).json({message:"added", data: update});
  } catch (err) {
    res.status(500).json({ error: "Server error", err });
  }
};
