"use client"
import Image from 'next/image';
import React from 'react'
import logo from '@/assets/BannerImg.png'
import Link from 'next/link';

function JobCard({ job }) {
    return (
        <div className='bg-white rounded-lg text-black flex justify-between items-center px-10 p-8'>
            <div>
                <Image width={150} height={150} src={logo} alt='company logo' />
            </div>
            <div>
                <h1 className='font-bold text-2xl mt-2'>{job.title}</h1>
                <p className='text-sm mt-1'>{job.description}</p>
                <div className='flex gap-2'>
                    <span className='inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mt-2'>{job.jobType}</span>
                    <span className='inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mt-2'>{job.salary}</span>
                </div>
            </div>
            <div>
                <div className='mt-4'>
                    <button className='bg-blue-500 text-white px-4 w-full py-2 rounded-lg'>Apply</button>
                </div>
                <div>
                    <Link href={`/job-details/${job.id}`}>
                        <button className='bg-gray-300 text-black px-4 py-2 rounded-lg mt-2'>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default JobCard;






//  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-2 hover:shadow-2xl">
//       <img src={job.companyLogo} alt="Company Logo" className="w-14 h-14 mb-4 object-contain rounded-full border border-blue-100" />
//       <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{job.title}</h3>
//       <p className="text-gray-600 text-base mb-4 line-clamp-2">{job.description}</p>
//       <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-4">{job.jobType}</span>
//       <div className="flex gap-2 mt-auto w-full justify-center">
//         <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors shadow">Apply</button>
//         <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold text-sm transition-colors shadow">View Details</button>
//       </div>
//     </div>

