 "use client"
import Link from 'next/link'
import React, { useState } from 'react'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="bg-white sticky top-0 z-50 text-black py-3 border-b border-gray-300">
            <div className="max-w-[1700px] mx-auto flex justify-between items-center px-4">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link className="flex gap-1.5 items-center" href="/">
                        <img src="/logo.svg" alt="Job Portal Logo" className="w-8 h-8" />
                        <h1 className="text-2xl font-bold">Job Portal</h1>
                    </Link>
                </div>
                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 lg:space-x-12 font-semibold">
                    <Link href="/">HOME</Link>
                    <Link href="/about">ABOUT US</Link>
                    <Link href="/jobs">JOBS</Link>
                    <Link href="/contact">CONTACT US</Link>
                    <Link href="/dashboard">DASHBOARD</Link>
                </div>
                {/* Desktop Auth Buttons */}
                <div className="hidden md:flex space-x-4 text-white font-semibold bg-blue-500 py-2 px-4 rounded-lg">
                    <Link href="/login">LOGIN</Link>
                    <div>/</div>
                    <Link href="/register">REGISTER</Link>
                </div>
                {/* Hamburger Icon for Mobile */}
                <button className="md:hidden flex items-center p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden bg-white border-t border-gray-200 shadow-lg absolute w-full left-0 top-full z-40 transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col items-center py-4 gap-4 font-semibold">
                    <Link href="/" onClick={() => setMenuOpen(false)}>HOME</Link>
                    <Link href="/about" onClick={() => setMenuOpen(false)}>ABOUT US</Link>
                    <Link href="/jobs" onClick={() => setMenuOpen(false)}>JOBS</Link>
                    <Link href="/contact" onClick={() => setMenuOpen(false)}>CONTACT US</Link>
                    <Link href="/dashboard" onClick={() => setMenuOpen(false)}>DASHBOARD</Link>
                    <div className="flex space-x-4 text-white font-semibold bg-blue-500 py-2 px-4 rounded-lg">
                        <Link href="/login" onClick={() => setMenuOpen(false)}>LOGIN</Link>
                        <div>/</div>
                        <Link href="/register" onClick={() => setMenuOpen(false)}>REGISTER</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar