import mongoose, { Schema, Document } from "mongoose";

interface ISection extends Document {
  name: string;
  likes: string[];
  order: number;
  documents: mongoose.Types.ObjectId[];
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
    documents: [
      {
        type: Schema.Types.ObjectId,
        ref: "Doc",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Section = mongoose.model<ISection>("Section", SectionSchema);

export default Section;
