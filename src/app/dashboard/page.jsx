import React from 'react'

function Dashboard() {
  return (
    <section className="min-h-[80vh] bg-[#f8fafc] py-12 px-4">
      <div className="max-w-full mx-auto">
        {/* Welcome Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-2">Welcome to Your Dashboard</h1>
            <p className="text-gray-700 text-lg mb-4">Manage your job applications, view stats, and explore new opportunities all in one place.</p>
            <div className="flex gap-4 mt-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow">Browse Jobs</button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-2 rounded-lg shadow">Profile</button>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="/dashboard-illustration.svg" alt="Dashboard Illustration" className="w-64 h-auto" />
          </div>
        </div>
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-blue-500 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 17v-6a4 4 0 014-4h10a4 4 0 014 4v6" />
              </svg>
            </span>
            <div className="text-2xl text-gray-700 font-bold">12</div>
            <div className="text-gray-600">Applications</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-green-500 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <div className="text-2xl text-gray-700 font-bold">3</div>
            <div className="text-gray-600">Interviews</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-yellow-500 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
              </svg>
            </span>
            <div className="text-2xl text-gray-700 font-bold">5</div>
            <div className="text-gray-600">Saved Jobs</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-red-500 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </span>
            <div className="text-2xl text-gray-700 font-bold">2</div>
            <div className="text-gray-600">Offers</div>
          </div>
        </div>
        {/* Recent Activity Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <ul className="space-y-3">
            <li className="flex items-center justify-between">
              <span className="text-gray-700">Applied for Frontend Developer</span>
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">2 days ago</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-gray-700">Interview scheduled for UI/UX Designer</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">1 day ago</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-gray-700">Saved Mobile App Developer job</span>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">3 days ago</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-gray-700">Received offer for Backend Developer</span>
              <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">Today</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;