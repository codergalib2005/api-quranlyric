import mongoose, { Schema, Document } from "mongoose";

interface IDocument extends Document {
  title: string;
  content: string;
  category: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const documentSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    tags: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

const Doc = mongoose.model<IDocument>("Doc", documentSchema);

export default Doc;
