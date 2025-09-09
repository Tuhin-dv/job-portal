import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'


function page() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-100 via-white to-blue-100 py-20 text-black flex flex-col items-center justify-center border-b border-blue-200 shadow-sm">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-blue-700 tracking-tight drop-shadow">About Us</h1>
        <p className="max-w-2xl text-lg md:text-2xl text-center text-gray-700 font-medium">We are dedicated to connecting talented people with their dream jobs, empowering both job seekers and employers to achieve their goals.</p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 md:px-0 flex flex-col items-center bg-white border-b border-blue-100">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700 tracking-tight">Our Mission</h2>
        <p className="max-w-2xl text-center text-gray-700 mb-10 text-lg">Our mission is to simplify the job search process and help companies find the best talent. We believe in transparency, efficiency, and creating opportunities for everyone.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow flex flex-col items-center border border-blue-100">
            <span className="text-blue-500 text-4xl mb-3">🌟</span>
            <h3 className="font-bold text-xl mb-2 text-blue-800">Empowerment</h3>
            <p className="text-gray-700 text-center">We empower job seekers to take control of their careers and employers to build great teams.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow flex flex-col items-center border border-blue-100">
            <span className="text-blue-500 text-4xl mb-3">🤝</span>
            <h3 className="font-bold text-xl mb-2 text-blue-800">Connection</h3>
            <p className="text-gray-700 text-center">We connect people and companies, making the hiring process seamless and effective.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow flex flex-col items-center border border-blue-100">
            <span className="text-blue-500 text-4xl mb-3">🚀</span>
            <h3 className="font-bold text-xl mb-2 text-blue-800">Growth</h3>
            <p className="text-gray-700 text-center">We foster growth for individuals and organizations through meaningful opportunities.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col items-center border-b border-blue-100">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700 tracking-tight">Meet Our Team</h2>
        <p className="max-w-2xl text-center text-gray-700 mb-10 text-lg">Our passionate team is committed to making your job search experience smooth and successful.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-4xl">
          {/* Example team members, replace with real data if available */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border border-blue-100">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Ayesha Rahman" className="w-20 h-20 rounded-full object-cover mb-3 border-4 border-blue-200" />
            <h4 className="font-bold text-lg text-blue-900">Ayesha Rahman</h4>
            <p className="text-blue-500">CEO & Founder</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border border-blue-100">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Towhid Hasan" className="w-20 h-20 rounded-full object-cover mb-3 border-4 border-blue-200" />
            <h4 className="font-bold text-lg text-blue-900">Towhid Hasan</h4>
            <p className="text-blue-500">Lead Developer</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border border-blue-100">
            <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Sadia Islam" className="w-20 h-20 rounded-full object-cover mb-3 border-4 border-blue-200" />
            <h4 className="font-bold text-lg text-blue-900">Sadia Islam</h4>
            <p className="text-blue-500">UI/UX Designer</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 flex flex-col items-center bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700 tracking-tight">Ready to Find Your Dream Job?</h2>
        <p className="max-w-xl text-center text-gray-700 mb-8 text-lg">Join our platform today and take the next step in your career journey. Whether you're a job seeker or an employer, we're here to help you succeed.</p>
        <a href="/jobs" className="px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl font-bold shadow-lg hover:scale-105 hover:from-blue-600 hover:to-blue-800 transition-all duration-200">Browse Jobs</a>
      </section>

      <Footer />
    </div>
  );
}

export default page