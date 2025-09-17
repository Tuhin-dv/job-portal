import mongoose from "mongoose";

const BookmarkSchema = new mongoose.Schema(
  {
    userEmail: { type: String, required: true },
    jobId: { type: String, required: true },
    jobData: { type: Object, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Bookmark ||
  mongoose.model("Bookmark", BookmarkSchema);
