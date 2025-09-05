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
          const foundJob = data.jobs.find(
            (j) => j._id.toString() === params.id
          );
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
  if (!job) return null; // already redirecting to 404

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="p-6 max-w-7xl mx-auto border bg-white text-black border-gray-300 rounded-lg shadow-md mt-20">
        <h1 className="text-2xl font-bold">{job.title}</h1>
        <p className="mt-2">{job.description}</p>
        <p className="mt-2 text-gray-600">Type: {job.jobType}</p>
        <p className="mt-2 text-gray-600">Salary: {job.salary}</p>
        <p className="mt-2 text-gray-600">Location: {job.location}</p>
        {job.companyLogo && (
          <img
            src={job.companyLogo}
            alt={job.company}
            className="w-32 h-32 mt-4 object-contain"
          />
        )}
      </div>
    </div>
  );
}

export default JobDetailsPage;
