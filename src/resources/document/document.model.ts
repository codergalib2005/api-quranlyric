import mongoose, { Schema, Document } from "mongoose";

interface IDocument extends Document {
  name: string;
  content: string;
  tags: string[];
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
}

const documentSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: [{ type: String }],
    slug: {
      type: String,
    },
    meta_title: {
      require: true,
      type: String,
    },
    meta_description: {
      required: true,
      type: String,
    },
    meta_keywords: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Doc = mongoose.model<IDocument>("Doc", documentSchema);

export default Doc;
