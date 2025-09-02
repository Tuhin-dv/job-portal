import React from 'react'
import Image from 'next/image'
import banner from '../assets/BannerImg.png'
import JobStats from './JobState'
function Hero() {
    return (
        <div>
            <section className="relative bg-white min-h-[800px] flex items-center justify-center overflow-hidden">
                {/* Decorative background shapes */}
                {/* <div className="absolute top-[-80px] left-[-120px] w-[320px] h-[320px]  rounded-full blur-2xl z-0"></div>
            <div className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] rounded-full blur-2xl z-0"></div> */}
                <div className="relative z-10 w-full max-w-[1700px] mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-lg">
                            Find The Job That Fits <span className="text-blue-500">Your Life</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-[500px] mx-auto md:mx-0">
                            Explore thousands of job opportunities and take the next step in your career. Discover roles tailored to your skills and ambitions.
                        </p>

                        <div className="w-full  md:mx-0">
                            <form className="flex items-center bg-white rounded-full shadow-lg border border-gray-200 px-2 py-2 gap-2">
                                {/* Job Title Input with Icon */}
                                <div className="flex items-center gap-2 px-4">
                                    <span className="text-blue-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7V6a2 2 0 012-2h14a2 2 0 012 2v1M16 11V9a4 4 0 00-8 0v2m12 0v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7" />
                                        </svg>
                                    </span>
                                    <input type="text" placeholder="JOB TITLE, SKILL, INDUSTRY" className="bg-transparent outline-none text-gray-700 text-base w-[180px] md:w-[220px]" />
                                </div>
                                {/* Divider */}
                                <span className="h-8 w-px bg-gray-200 mx-2" />
                                {/* Category Dropdown with Icon */}
                                <div className="flex items-center gap-2 px-4">
                                    <span className="text-blue-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                                            <circle cx="12" cy="9" r="2.5" fill="#FFFFFF" />
                                        </svg>
                                    </span>
                                    <select className="bg-transparent outline-none text-gray-700 text-base font-medium">
                                        <option value="any">Any Category</option>
                                        <option value="web">Web Development</option>
                                        <option value="uiux">UI/UX Design</option>
                                        <option value="graphics">Graphics Designer</option>
                                        <option value="app">App Developer</option>
                                        <option value="marketing">Digital Marketing</option>
                                        <option value="data">Data Analyst</option>
                                    </select>
                                </div>
                                {/* Divider */}
                                <span className="h-8 w-px bg-gray-200 mx-2" />
                                {/* Search Button */}
                                <button type="submit" className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold text-base px-8 py-4 rounded-full shadow-md transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                    </svg>
                                    SEARCH JOBS
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center md:justify-end">
                        <div className="relative">
                            <Image src={banner} alt="Banner Image" width={850} height={850} className="" />
                            {/* Subtle floating effect */}
                            {/* <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-blue-400/10 blur-xl z-[-1]" /> */}
                        </div>
                    </div>
                </div>

            </section>
           <JobStats></JobStats>

        </div>
    )
}

export default Hero