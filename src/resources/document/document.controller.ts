// title: string;
// content: string;
// category: string;
// tags: string[];

import counter from "../../utils/counter";
import slug from "../../utils/slug";
import Doc from "./document.model";

export const createDoc = async (req, res) => {
  try {
    const {
      name,
      content,
      topic,
      meta_title,
      meta_description,
      meta_keywords,
      order,
    } = req.body;

    const count = await Doc.countDocuments();

    const makeSlug = `${counter(count + 1)}-${slug(name)}`;
    const newDoc = new Doc({
      name,
      content,
      topic,
      slug: makeSlug,
      meta_title,
      meta_description,
      meta_keywords,
      order,
    });
    const saveDoc = await newDoc.save();
    res.status(201).json({ message: "Document Added success", data: saveDoc });
  } catch (err) {
    res.status(500).json({ error: "Document didn't add", err });
  }
};
export const getDocs = async (req, res) => {
  let { lang } = req.query || {};

  // Convert lang to lowercase if it exists
  lang = lang ? lang.toLowerCase() : undefined;

  try {
    let query = {};

    // Add topic query if lang is provided
    if (lang) {
      (query as any).topic = { $regex: lang, $options: "i" };
    }

    const docs = await Doc.find(query);
    res.status(200).json({ message: "docs loaded", data: docs });
  } catch (err) {
    res.status(500).json({ message: "That was server error" });
  }
};
export const getADoc = async (req, res) => {
  const { id } = req.params;

  try {
    const doc = await Doc.findById(id);

    if (!doc) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.status(200).json({ data: doc, msg: "Loaded" });
  } catch (err) {
    res.status(403).json({ msg: "server error" });
  }
};
export const updateDoc = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await Doc.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    if (!doc) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.status(201).json({ message: "Updated" });
  } catch (err) {
    res.status(403).json({ message: "Server error" });
  }
};
export const deleteDoc = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedData = await Doc.findOneAndDelete({ _id: id });
    if (!deletedData) {
      return res.status(404).json({ msg: "Data not found" });
    }
    res.status(200).json({ msg: "Data deleted", data: deletedData });
  } catch (err) {
    res.status(201).json({ msg: "Server error" });
  }
};
export const getBySlug = async (req, res) => {
  const { slug } = req.params;
  try {
    const findDoc = await Doc.findOne({ slug });
    if (!findDoc) {
      return res.status(404).json({ msg: "Document not found" });
    }
    res.status(200).json({ msg: "Document find", data: findDoc });
  } catch (err) {
    res.status(403).json({ msg: "Server error", err });
  }
};
