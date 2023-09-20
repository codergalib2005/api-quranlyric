import Surah from "./surah.model";

const getAllSurah = async (req, res) => {
  try {
    const count = await Surah.countDocuments();
    const findSurah = await Surah.find({}).select(
      `name transliteration number translation revelation_type total_verses audio_one verses.audio_one verses.verses verses.text verses.ar.text`
    );
    if (!findSurah) {
      res.status(404).json({ msg: "Surah not found!!" });
    } else {
      res.status(201).json({ message: "Surah Loaded", count, data: findSurah });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to create section", err });
  }
};

export { getAllSurah };
