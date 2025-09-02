"use client"

import { Briefcase, Palette, Landmark } from "lucide-react"
import Image from "next/image"
import people from '@/assets/peopleImg.png'

export default function JobStats() {
    return (
        <div className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600
">
            <div className="h-[200px] max-w-[1700px] mx-auto  flex items-center justify-between px-4   overflow-hidden">
                {/* Left side image + text */}
                <div className="flex items-center gap-4 w-1/2">
                    <Image src={people} width={200} height={200} alt="people group img"/>
                    <h1 className="font-bold text-3xl text-white leading-snug">
                        Discover <br /> Trending <span className="text-yellow-300">Jobs</span>
                    </h1>
                </div>

                {/* Right side stats */}
                <div className="grid grid-cols-3 gap-6 w-1/2 text-white">
                    {/* Web Development */}
                    <div className="flex flex-col items-center bg-white/10 backdrop-blur-md p-5 rounded-xl hover:bg-gradient-to-tr hover:from-yellow-400/30 hover:to-yellow-200/20 transition-all duration-300 shadow-md">
                        <Briefcase className="w-9 h-9 mb-2 text-yellow-300" />
                        <h2 className="text-2xl font-extrabold">120+</h2>
                        <p className="text-sm tracking-wide">Web Development</p>
                    </div>

                    {/* Web Design */}
                    <div className="flex flex-col items-center bg-white/10 backdrop-blur-md p-5 rounded-xl hover:bg-gradient-to-tr hover:from-pink-400/30 hover:to-pink-200/20 transition-all duration-300 shadow-md">
                        <Palette className="w-9 h-9 mb-2 text-pink-300" />
                        <h2 className="text-2xl font-extrabold">80+</h2>
                        <p className="text-sm tracking-wide">Web Design</p>
                    </div>

                    {/* Government */}
                    <div className="flex flex-col items-center bg-white/10 backdrop-blur-md p-5 rounded-xl hover:bg-gradient-to-tr hover:from-green-400/30 hover:to-green-200/20 transition-all duration-300 shadow-md">
                        <Landmark className="w-9 h-9 mb-2 text-green-300" />
                        <h2 className="text-2xl font-extrabold">50+</h2>
                        <p className="text-sm tracking-wide">Government</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
