"use client"
import React from 'react'
import { motion } from "framer-motion";
const steps = [
  {
    icon: (
      <span className="bg-blue-100 p-4 rounded-full text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
        </svg>
      </span>
    ),
    title: 'Create Account',
    desc: 'Sign up easily with your email and start your journey towards your dream job. Creating an account gives you access to all features.'
  },
  {
    icon: (
      <span className="bg-green-100 p-4 rounded-full text-green-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4 4 4-4m-4-5v9" />
        </svg>
      </span>
    ),
    title: 'Search Jobs',
    desc: 'Browse thousands of job listings tailored to your skills and interests. Use filters to find the perfect match for your career.'
  },
  {
    icon: (
      <span className="bg-purple-100 p-4 rounded-full text-purple-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 17v-6m0 0V7m0 4l-2-2m2 2l2-2" />
        </svg>
      </span>
    ),
    title: 'Submit Resume',
    desc: 'Upload your resume to showcase your skills and experience. A strong resume increases your chances of getting noticed by employers.'
  },
  {
    icon: (
      <span className="bg-orange-100 p-4 rounded-full text-orange-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </span>
    ),
    title: 'Apply & Get Hired',
    desc: 'Submit your application and get noticed by top employers. Track your application status and prepare for interviews.'
  }
];

function WorksProcess() {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work Process</h2>
        <p className="text-lg text-gray-600 mb-8">We make your job search simple and effective. Follow these easy steps to land your dream job and grow your career with us.</p>
      </div>
      <div className="max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center relative group transition-transform hover:-translate-y-2">
            {/* Top Icon */}
            {step.icon}
            {/* Title */}
            <h3 className="mt-6 text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
            {/* Description */}
            <p className="text-gray-600 text-base mb-8 text-center">{step.desc}</p>
            {/* Bottom Right Arrow Icon */}
            <span className="absolute bottom-6 right-6 text-[#FF714B] group-hover:translate-x-2 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorksProcess