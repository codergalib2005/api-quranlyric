// title: string;
// content: string;
// category: string;
// tags: string[];

import Doc from "./document.model";

export const createDoc = async (req, res) => {
  try {
    const { title, content, category } = req.body;
    const newDoc = new Doc({
      title,
      content,
      category,
    });
    const saveDoc = await newDoc.save();
    res.status(201).json({ message: "Document Added success", data: saveDoc });
  } catch (err) {
    res.status(500).json({ error: "Document didn't add", err });
  }
};
export const getDocs = async (req, res) => {};
export const getADoc = async (req, res) => {};
export const updateDoc = async (req, res) => {};
export const deleteDoc = async (req, res) => {};
