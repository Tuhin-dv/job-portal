"use client";
import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import { LoadingSpinner } from "./loadingSpinner/Loading";

function Jobs() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchJobs() {
            try {
                const res = await fetch("/api/jobs");
                const data = await res.json();
                if (data.success) {
                    setJobs(data.jobs);
                } else {
                    console.error("Failed to fetch jobs:", data.error);
                }
            } catch (err) {
                console.error("Error fetching jobs:", err);
            } finally {
                setLoading(false);
            }
        }

        fetchJobs();
    }, []);

    if (loading) return <div className="border rounded-lg p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        
        <LoadingSpinner/>
    </div>
        ;
    if (!jobs.length) return <p className="text-center py-12">No jobs found.</p>;

    return (
        <div className="bg-gray-100 min-h-screen">

            <div className="max-w-[1600px] mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
                {jobs.map((job) => (
                    <JobCard key={job._id} job={job} />
                ))}
            </div>
        </div>
    );
}

export default Jobs;
