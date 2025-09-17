import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Bookmark from "@/models/Bookmark";

// POST -> Save bookmark
export async function POST(req) {
    try {
        const body = await req.json();
        const { userEmail, jobId, jobData } = body;

        if (!userEmail || !jobId) {
            return NextResponse.json({ message: "Missing fields" }, { status: 400 });
        }

        await connectToDatabase();

        // check duplicate
        const exists = await Bookmark.findOne({ userEmail, jobId });
        if (exists) {
            return NextResponse.json({ message: "Already bookmarked" }, { status: 409 });
        }

        const newBookmark = await Bookmark.create({
            userEmail,
            jobId,
            jobData,
        });

        return NextResponse.json(newBookmark, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

// GET -> Get bookmarks by user email
export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const email = searchParams.get("email");

        if (!email) {
            return NextResponse.json({ message: "Email is required" }, { status: 400 });
        }

        await connectToDatabase();
        const bookmarks = await Bookmark.find({ userEmail: email });
        return NextResponse.json(bookmarks, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

// DELETE -> remove bookmark by id
export async function DELETE(req) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json({ message: "Bookmark ID required" }, { status: 400 });
        }

        await connectToDatabase();

        const deleted = await Bookmark.findByIdAndDelete(id);
        if (!deleted) {
            return NextResponse.json({ message: "Not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
