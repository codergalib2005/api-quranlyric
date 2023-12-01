import mongoose, { Document, Schema } from "mongoose";

interface IPost extends Document {
  title: string;
  tags: string[];
  body: string;
  image?: string;
  video?: string;
  videoThumbnail?: string;
  images?: string[];
  audio?: string;
}

const PostSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    video: {
      type: String,
    },
    videoThumbnail: {
      type: String,
    },
    images: {
      type: [String],
    },
    audio: {
      type: String,
    },
  },
  { timestamps: true }
);
const Post = mongoose.model<IPost>("Post", PostSchema);
export default Post;
