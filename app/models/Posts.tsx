import mongoose from "mongoose";

const { Schema } = mongoose;

export interface IPost {
  title: string;
  description: string;
  imageUrl: string;
}

const postSchema = new Schema<IPost>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const BlogPost =
  mongoose.models.BlogPost || mongoose.model("BlogPost", postSchema);
export default BlogPost;
