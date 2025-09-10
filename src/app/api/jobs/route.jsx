import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongodb";
import Job from "../../../models/job";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "company") {
      return NextResponse.json(
        { success: false, message: "Only companies can post jobs" },
        { status: 403 }
      );
    }

    await connectToDatabase();
    const data = await request.json();

    const newJobData = {
      ...data, // job-specific fields from form
      createdAt: new Date(),
      updatedAt: new Date(),
      status: "Active",

      // Attach company info from session
      companyId: session.user.id,
      companyName: session.user.companyName || session.user.name,
      companyEmail: session.user.email,
      companyWebsite: session.user.companyWebsite || "",
      companyLocation: session.user.companyLocation || "",
      companyLogo: session.user.image || "",
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
