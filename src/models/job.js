import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  jobType: { type: String, required: true },
  salary: { type: String },
  applicationDeadline: { type: Date, required: true },
  location: { type: String, required: true },
  skills: { type: String },
  applicationEmail: { type: String, required: true },

  // New fields from form
  image: { type: String },
  workHours: { type: String },
  duration: { type: String },
  jobPeriod: { type: String },
  tags: [{ type: String }],

  // Company info from session
  companyId: { type: String, required: true },
  companyName: { type: String, required: true },
  companyEmail: { type: String, required: true },
  companyWebsite: { type: String },
  companyLocation: { type: String },
  companyLogo: { type: String },

  status: { type: String, default: "Active" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Job || mongoose.model("Job", JobSchema);
