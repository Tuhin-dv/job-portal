import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white pt-12 pb-6 ">
      <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo & Title */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.svg" alt="Job Portal Logo" className="w-12 h-12" />
            <span className="text-2xl font-bold">Job Portal</span>
          </div>
          <p className="text-blue-100 text-sm text-center md:text-left">
            Find your dream job with ease. Explore thousands of opportunities
            across industries and locations.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col items-center gap-3 md:items-center">
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <div className="flex flex-col gap-2 text-base font-medium">
            <a href="/jobs" className="hover:underline hover:text-blue-200 transition">Jobs</a>
            <a href="/about" className="hover:underline hover:text-blue-200 transition">About Us</a>
            <a href="/contact" className="hover:underline hover:text-blue-200 transition">Contact</a>
            <a href="/dashboard" className="hover:underline hover:text-blue-200 transition">Dashboard</a>
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
          <div className="flex gap-5">
            <a href="#" aria-label="Facebook" className="hover:text-blue-200 transform hover:scale-110 transition">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                <path d="M22.675 0h-21.35C.592 0 0 .592 0 1.326v21.348C0 23.408.592 24 1.325 
                24h11.495v-9.294H9.692v-3.622h3.128v-2.672c0-3.1 
                1.893-4.788 4.659-4.788 1.325 0 2.463.099 
                2.797.143v3.24l-1.918.001c-1.504 
                0-1.797.715-1.797 1.763v2.313h3.587l-.467 
                3.622h-3.12V24h6.104c.733 0 
                1.325-.593 1.325-1.326V1.326C24 
                .592 23.408 0 22.675 0"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-200 transform hover:scale-110 transition">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                <path d="M24 4.557a9.93 9.93 0 
                01-2.828.775 4.932 4.932 0 
                002.165-2.724c-.951.564-2.005.974-3.127 
                1.195a4.92 4.92 0 00-8.384 
                4.482C7.691 8.094 4.066 6.13 1.64 
                3.161c-.542.929-.855 2.01-.855 
                3.17 0 2.188 1.115 4.117 2.823 
                5.254a4.904 4.904 0 
                01-2.229-.616c-.054 2.281 1.581 
                4.415 3.949 4.89a4.936 4.936 0 
                01-2.224.084c.627 1.956 2.444 
                3.377 4.6 3.418A9.867 9.867 0 
                010 21.543a13.94 13.94 0 
                007.548 2.212c9.058 0 
                14.009-7.513 14.009-14.009 
                0-.213-.005-.425-.014-.636A10.025 
                10.025 0 0024 4.557z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-200 transform hover:scale-110 transition">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                <path d="M19 0h-14c-2.761 
                0-5 2.239-5 5v14c0 2.761 
                2.239 5 5 5h14c2.761 0 
                5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 
                19h-3v-10h3v10zm-1.5-11.268c-.966 
                0-1.75-.784-1.75-1.75s.784-1.75 
                1.75-1.75 1.75.784 1.75 
                1.75-.784 1.75-1.75 
                1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 
                0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 
                1.379-1.563 2.838-1.563 3.036 0 3.599 
                2 3.599 4.594v5.602z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-blue-400 mt-10 pt-4 text-center text-sm text-blue-100">
        &copy; {new Date().getFullYear()} Job Portal. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
