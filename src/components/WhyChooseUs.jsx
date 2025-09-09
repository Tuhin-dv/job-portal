"use client"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function WhyChooseUs() {
    return (
        <div className="bg-white">
            <section className="max-w-[1600px] mx-auto py-16 px-4 md:px-8 flex flex-col md:flex-row gap-12 md:gap-20 items-center">
                {/* Left Side Image */}
                <div className="flex justify-center items-start w-full md:w-1/2">
                    <Image
                        src="/job-search.jpg"
                        alt="Job Portal"
                        width={500}
                        height={500}
                        className="rounded-2xl shadow-2xl border-4 border-white object-cover"
                    />
                </div>

                {/* Right Side Text */}
                <div className="flex flex-col justify-center w-full md:w-1/2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
                        Why <span className="text-blue-600">Choose Us?</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 mb-8 max-w-xl">
                        Our role-based job portal makes it easier for job seekers to apply, HRs to post, and Admins to verify. Enjoy a secure, efficient, and modern hiring system designed for everyone.
                    </p>

                    <ul className="space-y-4">
                        {[
                            "Browse verified jobs",
                            "Easy application process",
                            "HR & Admin approval system",
                            "Secure authentication"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-800 text-base md:text-lg">
                                <CheckCircle className="text-blue-500 w-6 h-6 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    )
}
