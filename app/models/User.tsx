import { Schema } from "mongoose";
import mongoose from "mongoose";

// Document interface
interface User {
  name: string;
  email: string;
  password: string;
}

// Schema
const schema = new Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: String,
  },
  { timestamps: true }
);

export default mongoose.model("User", schema);
