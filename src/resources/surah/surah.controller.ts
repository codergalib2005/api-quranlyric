import Surah from "./surah.model";

const getAllSurah = async (req, res) => {
  try {
    const count = await Surah.countDocuments();
    const findSurah = await Surah.find({});
    res.send({ count, findSurah });
  } catch (err) {
    res.status(500).json({ error: "Failed to create section", err });
  }
};

export { getAllSurah };
