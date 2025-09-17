"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import JobCard from "@/components/JobCard";

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
        {savedJobs.map((bookmark) => (
          <div key={bookmark._id} className="relative">
            <JobCard job={bookmark.jobData} />
            <button
              onClick={() => handleDelete(bookmark._id)}
              className="absolute top-4 right-4 bg-red-500 text-white px-3 py-2 rounded-md text-sm hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
