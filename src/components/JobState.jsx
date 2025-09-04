"use client"

import { Briefcase, Palette, Landmark } from "lucide-react"
import Image from "next/image"
import people from '@/assets/peopleImg.png'

export default function JobStats() {
    return (
        <div className="bg-gradient-to-r from-teal-500  via-cyan-500 to-blue-600">
            <div className="max-w-[1700px] mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 overflow-hidden">
                {/* Left side image + text */}
                <div className="flex items-center gap-4 w-full md:w-1/2 justify-center md:justify-start">
                    <Image src={people} width={140} height={140} alt="people group img" className="w-[100px] h-[100px] md:w-[140px] md:h-[140px]" />
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-snug text-center md:text-left">
                        Discover <br /> Trending <span className="text-yellow-300">Jobs</span>
                    </h1>
                </div>

                {/* Right side stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full md:w-1/2 text-white mt-8 md:mt-0">
                    {/* Web Development */}
                    <div className="flex flex-col items-center bg-white/10 backdrop-blur-md p-5 rounded-xl hover:bg-gradient-to-tr hover:from-yellow-400/30 hover:to-yellow-200/20 transition-all duration-300 shadow-md min-w-[120px]">
                        <Briefcase className="w-9 h-9 mb-2 text-yellow-300" />
                        <h2 className="text-xl md:text-2xl font-extrabold">120+</h2>
                        <p className="text-sm tracking-wide">Web Development</p>
                    </div>

                    {/* Web Design */}
                    <div className="flex flex-col items-center bg-white/10 backdrop-blur-md p-5 rounded-xl hover:bg-gradient-to-tr hover:from-pink-400/30 hover:to-pink-200/20 transition-all duration-300 shadow-md min-w-[120px]">
                        <Palette className="w-9 h-9 mb-2 text-pink-300" />
                        <h2 className="text-xl md:text-2xl font-extrabold">80+</h2>
                        <p className="text-sm tracking-wide">Web Design</p>
                    </div>

                    {/* Government */}
                    <div className="flex flex-col items-center bg-white/10 backdrop-blur-md p-5 rounded-xl hover:bg-gradient-to-tr hover:from-green-400/30 hover:to-green-200/20 transition-all duration-300 shadow-md min-w-[120px]">
                        <Landmark className="w-9 h-9 mb-2 text-green-300" />
                        <h2 className="text-xl md:text-2xl font-extrabold">50+</h2>
                        <p className="text-sm tracking-wide">Government</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
