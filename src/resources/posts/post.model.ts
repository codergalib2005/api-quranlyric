import mongoose, { Document, Schema } from "mongoose";

interface IPost extends Document {
  title: string;
  slug: string;
  description: string;
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
    slug: {
      type: String,
      required: true,
    },
    description: {
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
