"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";


export default function SavedJobsPage() {
  const { data: session } = useSession();
  const [savedJobs, setSavedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSavedJobs = async () => {
    if (!session?.user?.email) return;
    try {
      const res = await fetch(`/api/bookmarks?email=${session.user.email}`);
      const data = await res.json();
      setSavedJobs(data);
    } catch (error) {
      console.error("Error fetching saved jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSavedJobs();
  }, [session?.user?.email]);

  // Delete handler
  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to remove this bookmark?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/bookmarks?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setSavedJobs((prev) => prev.filter((job) => job._id !== id));
        alert("Bookmark removed!");
      } else {
        alert("Failed to remove bookmark");
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  if (loading) return <p className="p-6">Loading saved jobs...</p>;

  if (savedJobs.length === 0) {
    return <p className="p-6">No saved jobs yet.</p>;
  }

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold text-black mb-4">My Saved Jobs</h1>
      <div className="space-y-4">
        {savedJobs.map((bookmark) => {
          const job = bookmark.jobData;
          const skillsArray = job.skills ? job.skills.split(",").map(s => s.trim()) : [];
          return (
            <div key={bookmark._id} className="relative bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6 hover:shadow-lg transition-transform hover:-translate-y-1">
              {/* Company Logo */}
              <div className="flex-shrink-0 flex items-center justify-center bg-blue-50 border border-blue-100 rounded-xl w-24 h-24 md:w-28 md:h-28">
                <img
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
                  <div className="flex flex-col items-start md:items-end gap-2">
                    {job.salary && (
                      <p className="text-gray-900 mt-10 font-bold text-xl">${job.salary}K</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-3">
                  <span>{job.location || job.companyLocation}</span>
                  <span>{job.jobType}</span>
                  <span>{new Date(job.applicationDeadline).toLocaleDateString()}</span>
                </div>
                {skillsArray.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {skillsArray.map((skill, i) => (
                      <span key={i} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">{skill}</span>
                    ))}
                  </div>
                )}
                {job.tags && job.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((tag, i) => (
                      <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">{tag}</span>
                    ))}
                  </div>
                )}
                <div className="flex flex-col md:flex-row gap-3">
                  <a
                    href={`mailto:${job.applicationEmail}`}
                    className="bg-gray-900 hover:bg-black text-white px-5 py-2 rounded-lg font-semibold text-sm transition w-full md:w-auto text-center"
                  >
                    Apply
                  </a>
                  <a
                    href={`/job-details/${job._id}`}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2 rounded-lg font-semibold text-sm transition w-full md:w-auto text-center"
                  >
                    View Details
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleDelete(bookmark._id)}
                className="absolute top-4 mb-2 right-4 bg-red-500 text-white px-3 py-2 rounded-md text-sm hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
