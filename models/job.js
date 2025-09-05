import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  jobType: { type: String, required: true },
  salary: { type: String, required: true },
  applicationDeadline: { type: Date, required: true },
  company: { type: String, required: true },
  logo: { type: String }, // Company logo URL
  location: { type: String, required: true },
  skills: { type: String },
  applicationEmail: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Job || mongoose.model("Job", JobSchema);
