"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { useSession, signOut } from 'next-auth/react';
import Swal from 'sweetalert2'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const { data: session, status } = useSession();

    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You will be logged out!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, logout!'
        }).then((result) => {
            if (result.isConfirmed) {
                signOut({ callbackUrl: "/login" });
            }
        })
    }

    return (
        <div className="bg-white sticky top-0 z-50 text-black py-3 border-b border-gray-300">
            <div className="max-w-[1600px] mx-auto flex justify-between items-center px-4">
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

                {/* Desktop Auth/User Info */}
                <div className="hidden md:flex items-center space-x-4">
                    {status === "authenticated" ? (
                        <>
                            {session.user.image && (
                                <img 
                                    src={session.user.image} 
                                    alt="profile" 
                                    className="w-8 h-8 rounded-full cursor-pointer" 
                                    onClick={() => setProfileOpen(true)}
                                />
                            )}
                            <span className="font-semibold text-blue-600 cursor-pointer" onClick={() => setProfileOpen(true)}>
                                {session.user.name || session.user.email}
                            </span>
                        </>
                    ) : (
                        <div className="flex space-x-4 text-white font-semibold bg-blue-500 py-2 px-4 rounded-lg">
                            <Link href="/login">LOGIN</Link>
                            <div>/</div>
                            <Link href="/register">REGISTER</Link>
                        </div>
                    )}
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
                    {status === "authenticated" ? (
                        <div className="flex flex-col items-center gap-2 mt-2">
                            {session.user.image && (
                                <img src={session.user.image} alt="profile" className="w-8 h-8 rounded-full cursor-pointer" onClick={() => setProfileOpen(true)} />
                            )}
                            <span className="font-semibold text-blue-600 cursor-pointer" onClick={() => setProfileOpen(true)}>
                                {session.user.name || session.user.email}
                            </span>
                        </div>
                    ) : (
                        <div className="flex space-x-4 text-white font-semibold bg-blue-500 py-2 px-4 rounded-lg">
                            <Link href="/login" onClick={() => setMenuOpen(false)}>LOGIN</Link>
                            <div>/</div>
                            <Link href="/register" onClick={() => setMenuOpen(false)}>REGISTER</Link>
                        </div>
                    )}
                </div>
            </div>

            {/* Profile Modal */}
            {profileOpen && session && (
               <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
    <div className="bg-white w-full max-w-sm rounded-2xl shadow-2xl p-6 relative flex flex-col items-center">
        {/* Close Button */}
        <button 
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 font-bold text-2xl transition"
            onClick={() => setProfileOpen(false)}
        >
            &times;
        </button>

        {/* Avatar */}
        {session.user.image ? (
            <img 
                src={session.user.image} 
                alt="Profile" 
                className="w-24 h-24 rounded-full border-4 border-blue-500 mb-4 shadow-md"
            />
        ) : (
            <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 flex items-center justify-center text-2xl font-bold text-gray-500">
                {session.user.name ? session.user.name[0] : 'U'}
            </div>
        )}

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-1">{session.user.name || 'N/A'}</h2>
        <p className="text-gray-500 mb-4">{session.user.email}</p>

        {/* Info Box */}
        <div className="w-full bg-gray-50 rounded-xl p-4 mb-4 shadow-inner space-y-2">
            <p><span className="font-semibold text-gray-700">Role:</span> {session.user.role || 'user'}</p>
            <p><span className="font-semibold text-gray-700">Joined At:</span> {new Date(session.user.createdAt || Date.now()).toLocaleDateString()}</p>
        </div>

        {/* Logout Button */}
        <button 
            onClick={handleLogout} 
            className="w-full bg-blue-500 text-white py-2 rounded-xl font-semibold hover:bg-blue-600 transition-all shadow-md"
        >
            Logout
        </button>
    </div>
</div>

            )}
        </div>
    )
}

export default Navbar
