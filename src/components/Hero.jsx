import React from 'react'
import Image from 'next/image'
import banner from '../assets/bannerImg.svg'
function Hero() {
    return (
        <section className="relative bg-gradient-to-r from-[#f8fafc] via-[#e0e7ff] to-[#f0fdfa] min-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Decorative background shapes */}
            <div className="absolute top-[-80px] left-[-120px] w-[320px] h-[320px] bg-blue-400/20 rounded-full blur-2xl z-0"></div>
            <div className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] bg-[#6366f1]/20 rounded-full blur-2xl z-0"></div>
            <div className="relative z-10 w-full max-w-[1700px] mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-lg">
                        Find Your <span className="text-blue-600">Dream Job</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-[500px] mx-auto md:mx-0">
                        Explore thousands of job opportunities and take the next step in your career. Discover roles tailored to your skills and ambitions.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white py-3 px-8 rounded-xl shadow-lg font-semibold text-lg inline-flex items-center gap-2">
                        Get Started
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
                <div className="flex-1 flex justify-center md:justify-end">
                    <div className="relative">
                        <Image src={banner} alt="Banner Image" width={820} height={820} className="rounded-2xl shadow-2xl border-4 border-white object-contain animate-fade-in" />
                        {/* Subtle floating effect */}
                        <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-blue-400/10 blur-xl z-[-1]" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero