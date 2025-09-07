import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String }, // Not required for OAuth users
	image: { type: String },
	role: { type: String, enum: ["user", "company", "admin"], default: "user" },
	companyName: { type: String },
	companyWebsite: { type: String },
	companyLocation: { type: String },
	createdAt: { type: Date, default: Date.now },
	lastLogin: { type: Date },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
