"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

function JobDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJob() {
      try {
        const res = await fetch("/api/jobs"); // GET all jobs
        const data = await res.json();
        if (data.success) {
          const foundJob = data.jobs.find((j) => j._id.toString() === params.id);
          if (!foundJob) {
            router.push("/404"); // not found
          } else {
            setJob(foundJob);
          }
        } else {
          console.error("Failed to fetch jobs:", data.message);
        }
      } catch (err) {
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchJob();
  }, [params.id, router]);

  if (loading) return <p className="text-center py-12">Loading job details...</p>;
  if (!job) return null;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="max-w-5xl mx-auto mt-20 p-6 bg-white border border-gray-200 rounded-xl shadow-md">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          {job.logo && (
            <img
              src={job.logo}
              alt={job.company}
              className="w-32 h-32 object-contain border rounded-lg p-2 bg-gray-50"
            />
          )}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
            <p className="text-gray-600 mt-1">{job.company}</p>
            <div className="flex flex-wrap gap-3 mt-3 justify-center md:justify-start">
              <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
                {job.jobType}
              </span>
              {job.salary && (
                <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
                  ${job.salary}/mo
                </span>
              )}
              <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold">
                {job.location}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Job Description</h2>
          <p className="text-gray-700 leading-relaxed">{job.description}</p>
        </div>

        {/* Extra Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-4 bg-gray-50 rounded-lg border">
            <p className="text-gray-600 text-sm">Application Deadline</p>
            <p className="font-semibold">
              {new Date(job.applicationDeadline).toLocaleDateString()}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border">
            <p className="text-gray-600 text-sm">Contact Email</p>
            <p className="font-semibold">{job.applicationEmail}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border">
            <p className="text-gray-600 text-sm">Posted On</p>
            <p className="font-semibold">
              {new Date(job.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border">
            <p className="text-gray-600 text-sm">Skills Required</p>
            <p className="font-semibold">{job.skills}</p>
          </div>
        </div>

        {/* Action */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition-colors w-full sm:w-auto">
            Apply Now
          </button>
          <button
            onClick={() => router.back()}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold shadow transition-colors w-full sm:w-auto"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobDetailsPage;
