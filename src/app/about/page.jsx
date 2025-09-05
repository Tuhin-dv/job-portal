import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'


function page() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-500 to-blue-700 py-16 text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl text-lg md:text-xl text-center">We are dedicated to connecting talented people with their dream jobs, empowering both job seekers and employers to achieve their goals.</p>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-4 md:px-0 flex flex-col items-center bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-600">Our Mission</h2>
        <p className="max-w-2xl text-center text-gray-700 mb-6">Our mission is to simplify the job search process and help companies find the best talent. We believe in transparency, efficiency, and creating opportunities for everyone.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <div className="bg-blue-50 rounded-lg p-6 shadow flex flex-col items-center">
            <span className="text-blue-500 text-3xl mb-2">🌟</span>
            <h3 className="font-bold text-lg mb-1">Empowerment</h3>
            <p className="text-gray-600 text-center">We empower job seekers to take control of their careers and employers to build great teams.</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 shadow flex flex-col items-center">
            <span className="text-blue-500 text-3xl mb-2">🤝</span>
            <h3 className="font-bold text-lg mb-1">Connection</h3>
            <p className="text-gray-600 text-center">We connect people and companies, making the hiring process seamless and effective.</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 shadow flex flex-col items-center">
            <span className="text-blue-500 text-3xl mb-2">🚀</span>
            <h3 className="font-bold text-lg mb-1">Growth</h3>
            <p className="text-gray-600 text-center">We foster growth for individuals and organizations through meaningful opportunities.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-gray-100 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-600">Meet Our Team</h2>
        <p className="max-w-2xl text-center text-gray-700 mb-8">Our passionate team is committed to making your job search experience smooth and successful.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl">
          {/* Example team members, replace with real data if available */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center text-3xl mb-3">A</div>
            <h4 className="font-bold text-lg">Ayesha Rahman</h4>
            <p className="text-blue-500">CEO & Founder</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center text-3xl mb-3">T</div>
            <h4 className="font-bold text-lg">Towhid Hasan</h4>
            <p className="text-blue-500">Lead Developer</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center text-3xl mb-3">S</div>
            <h4 className="font-bold text-lg">Sadia Islam</h4>
            <p className="text-blue-500">UI/UX Designer</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 flex flex-col items-center bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-600">Ready to Find Your Dream Job?</h2>
        <p className="max-w-xl text-center text-gray-700 mb-6">Join our platform today and take the next step in your career journey. Whether you're a job seeker or an employer, we're here to help you succeed.</p>
        <a href="/jobs" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">Browse Jobs</a>
      </section>

      <Footer />
    </div>
  );
}

export default page