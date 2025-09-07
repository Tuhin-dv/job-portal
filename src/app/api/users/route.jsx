
import { NextResponse } from "next/server";
import User from "@/models/users";
import { connectToDB } from "@/lib/mongodb";

// POST: Save or update user (for Google OAuth or manual registration)
export async function POST(req) {
	try {
		const body = await req.json();
		await connectToDB();
		// If user exists, update; else create
		let user = await User.findOne({ email: body.email });
		if (user) {
			// Update lastLogin and profile info if Google login
			user.lastLogin = new Date();
			user.name = body.name || user.name;
			user.image = body.image || user.image;
			user.role = body.role || user.role;
			user.companyName = body.companyName || user.companyName;
			user.companyWebsite = body.companyWebsite || user.companyWebsite;
			user.companyLocation = body.companyLocation || user.companyLocation;
			await user.save();
		} else {
			user = await User.create({
				name: body.name,
				email: body.email,
				image: body.image,
				role: body.role || "user",
				companyName: body.companyName,
				companyWebsite: body.companyWebsite,
				companyLocation: body.companyLocation,
				createdAt: new Date(),
				lastLogin: new Date(),
			});
		}
		return NextResponse.json({ success: true, user });
	} catch (err) {
		return NextResponse.json({ success: false, message: err.message }, { status: 500 });
	}
}
