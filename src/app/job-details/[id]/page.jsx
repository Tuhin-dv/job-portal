"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { MapPin, Clock, Calendar, Share2, Bookmark } from "lucide-react";
import Link from "next/link";

function JobDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJob() {
      try {
        const res = await fetch("/api/jobs");
        const data = await res.json();
        if (data.success) {
          const foundJob = data.jobs.find((j) => j._id.toString() === params.id);
          if (!foundJob) {
            router.push("/404");
          } else {
            setJob(foundJob);
          }
        }
      } catch (err) {
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchJob();
  }, [params.id, router]);

  if (loading) return <div className="flex min-h-screen bg-white flex-col items-center justify-center py-12 space-y-4">
    <div className="flex space-x-1">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="w-2 h-6  bg-blue-600 animate-pulse rounded-sm"
          style={{
            animationDelay: `${i * 0.15}s`,
            animationDuration: "1.2s",
          }}
        ></div>
      ))}
    </div>
    <p className="text-gray-600 text-sm font-medium">Processing Jobs...</p>
  </div>
  if (!job) return null;

  const skillsArray = job.skills
    ? job.skills.split(",").map((s) => s.trim())
    : [];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto mt-16 p-6 bg-white border border-gray-200 rounded-xl shadow-md">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <div className="flex-shrink-0 w-28 h-28 flex items-center justify-center bg-blue-50 border border-blue-100 rounded-xl">
            <img
              src={job.companyLogo || "/placeholder.webp"}
              alt={job.companyName}
              className="w-20 h-20 object-contain"
            />
          </div>

          <div className="flex-1 w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                {job.status && (
                  <span className="text-red-500 text-xs font-semibold bg-red-50 px-2 py-1 rounded mr-2">
                    {job.status}
                  </span>
                )}
                <span className="text-pink-600 text-xs font-semibold bg-pink-50 px-2 py-1 rounded">
                  New
                </span>
                <h1 className="text-2xl font-bold text-gray-900 mt-2">
                  {job.title}
                </h1>
                <p className="text-gray-600">{job.companyName}</p>
              </div>

              <div className="flex flex-col items-start md:items-end gap-2">
                {/* Bookmark Icon */}
                <Bookmark className="text-gray-500 hover:text-gray-900 cursor-pointer" size={24} />

                {/* Salary */}
                {job.salary && (
                  <p className="text-gray-900 font-bold text-xl">${job.salary}K</p>
                )}
              </div>
            </div>

            {/* Work Info Icons */}
            <div className="flex flex-wrap gap-4 mt-4 text-gray-600 text-sm">
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
              <div className="flex flex-wrap gap-2 mt-4">
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
              <div className="flex flex-wrap gap-2 mt-2">
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
          </div>
        </div>

        {/* Body Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Left (Job Details) */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                What you’ll be working on
              </h2>
              <p className="text-gray-700 leading-relaxed">{job.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm">
              {job.workHours && <p>Work Hours: {job.workHours} / week</p>}
              {job.duration && <p>Duration: {job.duration} days</p>}
              {job.jobPeriod && <p>Job Period: {job.jobPeriod}</p>}
              {job.applicationEmail && <p>Email: {job.applicationEmail}</p>}
              {job.companyWebsite && (
                <p>
                  Website:{" "}
                  <a
                    href={job.companyWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {job.companyWebsite}
                  </a>
                </p>
              )}
              {job.companyLocation && <p>Company Location: {job.companyLocation}</p>}
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link
                href={`mailto:${job.applicationEmail}`}
                className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-lg font-semibold shadow transition-colors w-full sm:w-auto text-center"
              >
                Apply Now
              </Link>
              <button
                onClick={() => router.back()}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold shadow transition-colors w-full sm:w-auto"
              >
                Back
              </button>
            </div>
          </div>

          {/* Right (Share job) */}
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
            <div className="flex items-center gap-2 mb-3">
              <Share2 className="text-yellow-600" size={18} />
              <h3 className="font-semibold text-gray-800">Share this job</h3>
            </div>
            <div className="flex items-center gap-2 bg-white border rounded px-3 py-2">
              <input
                type="text"
                readOnly
                value={`https://yourdomain.com/job-details/${job._id}`}
                className="flex-1 text-sm text-gray-600 outline-none bg-transparent"
              />
              <button
                onClick={() => navigator.clipboard.writeText(`https://yourdomain.com/job-details/${job._id}`)}
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Copy link
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Grants are not eligible for referral bonuses at this time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetailsPage;
