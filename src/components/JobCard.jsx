"use client"
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';


function JobCard({ job }) {
    console.log(job)
    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-7 flex flex-col md:flex-row gap-6 items-center transition-transform hover:-translate-y-2 hover:shadow-2xl">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-center bg-blue-50 rounded-xl w-28 h-28 md:w-32 md:h-32 border border-blue-100">
                <Image width={90} height={90} src={job.logo || "/placeholder.webp"} alt="company logo" className="object-contain w-20 h-20 md:w-24 md:h-24" />
            </div>
            {/* Info */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                <h1 className="font-bold text-xl md:text-2xl text-gray-900 mb-1 line-clamp-1">{job.title}</h1>
                <p className="text-gray-600 text-sm md:text-base mb-3 line-clamp-2">{job.description}</p>
                <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                    <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">{job.jobType}</span>
                    <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">{job.salary ? `$${job.salary}/mo` : ''}</span>
                </div>
            </div>
            {/* Actions */}
            <div className="flex flex-col gap-2 w-full md:w-auto items-center md:items-end">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold text-sm shadow transition-colors w-full md:w-auto">Apply</button>
                <Link href={`/job-details/${job._id?.toString?.() || job.id}`}
                    className="w-full  md:w-auto">
                    <button className="bg-gray-100 cursor-pointer hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold text-sm shadow transition-colors w-full md:w-auto">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default JobCard;


