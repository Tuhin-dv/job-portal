import { NextResponse } from "next/server";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const MONGODB_URI = process.env.MONGODB_URI;

// User model definition (if not already defined)
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "company", "admin"], default: "user" },
  companyName: { type: String },
  companyWebsite: { type: String },
  companyLocation: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

async function connectToDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password, role, companyName, companyWebsite, companyLocation } = body;
    if (!name || !email || !password || !role) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }
    await connectToDB();
    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json({ success: false, message: "User already exists" }, { status: 409 });
    }
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashed,
      role,
      companyName,
      companyWebsite,
      companyLocation,
      createdAt: new Date(),
    });
    return NextResponse.json({ success: true, user });
  } catch (err) {
    return NextResponse.json({ success: false, message: "Registration failed" }, { status: 500 });
  }
}
