"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MapPin, Clock, Calendar, Bookmark } from "lucide-react";
import { useSession } from "next-auth/react";
function JobCard({ job }) {
  const { data: session } = useSession(); 
  const handleBookmark = async () => {
    if (!session?.user?.email) {
      alert("Please login first");
      return;
    }

    const res = await fetch("/api/bookmarks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userEmail: session.user.email,
        jobId: job._id,
        jobData: job,
      }),
    });

    if (res.ok) {
      alert("Bookmarked successfully!");
    } else if (res.status === 409) {
      alert("Already bookmarked!");
    } else {
      alert("Something went wrong!");
    }
  };





  // convert skills string -> array
  const skillsArray = job.skills
    ? job.skills.split(",").map((s) => s.trim())
    : [];

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6 hover:shadow-lg transition-transform hover:-translate-y-1">

      {/* Company Logo */}
      <div className="flex-shrink-0 flex items-center justify-center bg-blue-50 border border-blue-100 rounded-xl w-24 h-24 md:w-28 md:h-28">
        <Image
          width={80}
          height={80}
          src={job.companyLogo || "/placeholder.webp"}
          alt={job.companyName || "company logo"}
          className="object-contain w-16 h-16 md:w-20 md:h-20"
        />
      </div>

      {/* Job Info */}
      <div className="flex-1 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
          {/* Status + Title */}
          <div>
            {job.status && (
              <span className="text-red-500 text-xs font-semibold bg-red-50 px-2 py-1 rounded mr-2">
                {job.status}
              </span>
            )}
            <h2 className="font-bold text-lg md:text-xl text-gray-900 mt-2">
              {job.title}
            </h2>
          </div>

          {/* Salary */}

          <div className="flex flex-col items-start md:items-end gap-2">
            {/* Bookmark Icon */}
            <Bookmark
              onClick={handleBookmark}
              className="text-gray-500 hover:text-gray-900 cursor-pointer"
              size={24}
            />

            {/* Salary */}
            {job.salary && (
              <p className="text-gray-900 font-bold text-xl">${job.salary}K</p>
            )}
          </div>
        </div>

        {/* Work Info */}
        <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-3">
          <span className="flex items-center gap-1">
            <MapPin size={14} /> {job.location || job.companyLocation}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} /> {job.jobType}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={14} />{" "}
            {new Date(job.applicationDeadline).toLocaleDateString()}
          </span>
        </div>

        {/* Skills */}
        {skillsArray.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {skillsArray.map((skill, i) => (
              <span
                key={i}
                className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Tags */}
        {job.tags && job.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {job.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col md:flex-row gap-3">
          <a
            href={`mailto:${job.applicationEmail}`}
            className="bg-gray-900 hover:bg-black text-white px-5 py-2 rounded-lg font-semibold text-sm transition w-full md:w-auto text-center"
          >
            Apply
          </a>
          <Link href={`/job-details/${job._id}`}>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2 rounded-lg font-semibold text-sm transition w-full md:w-auto">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
