import mongoose, { Schema, Document } from "mongoose";

interface ISection extends Document {
  name: string;
  likes: string[];
  order: number;
}

const SectionSchema: Schema = new Schema(
  {
    name: {
      required: true,
      type: String,
    },
    likes: {
      type: [String],
    },
    order: {
      required: true,
      type: Number,
    },
  },
  {}
);
