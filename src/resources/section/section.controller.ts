import slug from "../../utils/slug";
import Section from "./section.model";

export const createSection = async (req, res) => {
  try {
    const { name, order, topic } = req.body;

    const count = await Section.countDocuments();
    const makeSlug = `${count + 1}-${slug(name)}`;

    const newSection = new Section({
      name,
      order,
      topic,
      slug: makeSlug,
    });

    const saveSection = await newSection.save();
    res.status(201).json({ message: "Section created", data: saveSection });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to create section", err });
  }
};
export const getSections = async (req, res) => {
  let { lang } = req.query || {};

  // Convert lang to lowercase if it exists
  lang = lang ? lang.toLowerCase() : undefined;

  try {
    let query = {};

    // Add topic query if lang is provided
    if (lang) {
      (query as any).topic = { $regex: lang, $options: "i" };
    }

    const sections = await Section.find(query)
      .populate("documents", "title content slug -_id")
      .exec();
    res.status(200).json({ message: "Data loaded", data: sections });
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve sections", err });
  }
};

export const getASection = (req, res) => {};
export const updateASection = (req, res) => {};
export const deleteASection = async (req, res) => {
  const id = req.params.id;
  try {
    const findSection = await Section.findOneAndDelete({ _id: id });

    if (!findSection) {
      return res.status(404).json({ msg: `Section not found at ${id}` });
    }
    res.status(201).json({ msg: "Data deleted", data: findSection });
  } catch (Error) {
    res.status(403).json({ msg: "Server error", err: Error });
  }
};

export const newDoc = async (req, res) => {
  const { sectionId, docId } = req.body;
  try {
    const section = await Section.findOne({ _id: sectionId });
    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }
    section.documents.push(docId);
    const updatedSection = await section.save();
    res.status(201).json({ message: "Updated section", data: updatedSection });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error", err });
  }
};
function populate(arg0: string, arg1: string) {
  throw new Error("Function not implemented.");
}
