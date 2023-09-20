import mongoose, { Schema, Document } from "mongoose";

interface IVerses {
  audio_one: string;
  verses: 1;
  english?: string;
  text: string;
  ar?: {
    text: string;
  };
  en?: {
    text: string;
  };
}

interface ISurah extends Document {
  number: number;
  name: string;
  transliteration: string;
  translation: string;
  revelation_type: string;
  total_verses: number;
  audio_one?: string;
  verses: IVerses[];
}

const SurahSchema: Schema = new Schema(
  {
    number: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      require: true,
    },
    transliteration: {
      type: String,
      required: true,
    },
    translation: {
      type: String,
      required: true,
    },
    revelation_type: {
      type: String,
      required: true,
    },
    total_verses: {
      type: Number,
      required: true,
    },
    audio_one: {
      type: String,
    },
    verses: [
      {
        audio_one: {
          type: String,
          required: true,
        },
        verses: {
          type: Number,
          required: true,
        },
        english: {
          type: String,
        },
        text: {
          type: String,
          required: true,
        },
        ar: {
          text: {
            type: String,
          },
        },
        en: {
          text: {
            type: String,
          },
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Section = mongoose.model<ISurah>("Surah", SurahSchema);

export default Section;
