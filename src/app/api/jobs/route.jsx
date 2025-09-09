import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongodb";
import Job from "../../../models/job";


export async function POST(request) {
  try {
    await connectToDatabase();
    const data = await request.json();


    // hidden/system fields add
    const newJobData = {
      ...data,                     // user input
      createdAt: new Date(),
      updatedAt: new Date(),
      status: "Active",
      // postedBy removed
    };

    const newJob = await Job.create(newJobData);

    return NextResponse.json({ success: true, job: newJob });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: err.message });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const jobs = await Job.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, jobs });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message });
  }
}
