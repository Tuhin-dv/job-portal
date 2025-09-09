"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <Navbar />
            {/* Hero Section */}
            <section className="w-full bg-gradient-to-r from-blue-50 to-blue-100 py-14 text-black flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-black">Contact Us</h1>
                <p className="max-w-xl text-center text-lg md:text-xl text-black">We'd love to hear from you! Reach out with any questions, feedback, or partnership opportunities.</p>
            </section>

            {/* Contact Info & Form Section */}
            <section className="flex flex-col md:flex-row gap-10 max-w-[1600px] mx-auto py-12 px-4 w-full">
                {/* Contact Info */}
                <div className="flex-1 bg-white rounded-lg shadow p-8 flex flex-col justify-center mb-6 md:mb-0">
                    <h2 className="text-2xl font-semibold text-black mb-4">Get in Touch</h2>
                    <div className="mb-3">
                        <span className="font-semibold text-black">Email:</span> <a href="mailto:info@jobportal.com" className="text-black hover:underline">info@jobportal.com</a>
                    </div>
                    <div className="mb-3">
                        <span className="font-semibold text-black">Phone:</span> <a href="tel:+880123456789" className="text-black hover:underline">+880 1234 56789</a>
                    </div>
                    <div className="mb-3">
                        <span className="font-semibold text-black">Address:</span> <span className="text-black">123 Main Street, Dhaka, Bangladesh</span>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <a href="#" className="text-black hover:text-blue-700 text-2xl">🌐</a>
                        <a href="#" className="text-black hover:text-blue-700 text-2xl">🐦</a>
                        <a href="#" className="text-black hover:text-blue-700 text-2xl">📘</a>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="flex-1 bg-white rounded-lg shadow p-8 flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
                    <h2 className="text-2xl font-semibold text-black mb-4">Send a Message</h2>
                    <input type="text" placeholder="Your Name" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black placeholder:text-gray-500" required />
                    <input type="email" placeholder="Your Email" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black placeholder:text-gray-500" required />
                    <textarea placeholder="Your Message" rows={5} className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black placeholder:text-gray-500" required />
                    <button type="submit" className="bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition">Send Message</button>
                </form>
            </section>

            <Footer />
        </div>
    );
}

export default page