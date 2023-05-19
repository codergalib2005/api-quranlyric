import mongoose, { Schema, Document } from "mongoose";

interface ISection extends Document {
  name: string;
  likes: string[];
  order: number;
  documents: mongoose.Types.ObjectId[];
  topic : string;
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
    topic: {
        required: true,
        type: String,
    }
  },
  {
    timestamps: true,
  }
);

const Section = mongoose.model<ISection>("Section", SectionSchema);

export default Section;
