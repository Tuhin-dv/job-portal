// src/lib/mongodb.js

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

let isConnected = false;

export async function connectToDatabase() {
  if (isConnected) return;
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    // console.log("MongoDB connected with Mongoose");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}