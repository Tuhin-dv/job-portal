import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../../lib/mongodb";
import Job from "../../../../models/job";

export async function POST(request) {
  try {
    await connectToDatabase();
    const data = await request.json();

    const newJob = await Job.create(data);

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
