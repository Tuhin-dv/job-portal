import React from "react";

function JobPostpage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-10 text-center">
        Post a New Job
      </h1>

      <form className="bg-white rounded-2xl shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Job Details */}
        <div className="flex flex-col gap-6">
          {/* Job Title */}
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Job Title
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter job title"
              required
            />
          </div>

          {/* Job Description */}
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Job Description
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              rows={4}
              placeholder="Describe the job role and responsibilities"
              required
            />
          </div>

          {/* Job Type */}
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Job Type
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select job type</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          {/* Salary */}
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Salary Range
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="$1000 - $2000/mo"
              required
            />
          </div>

          {/* Application Deadline */}
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Application Deadline
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
        </div>

        {/* Right Column - Company Info */}
        <div className="flex flex-col gap-6">
          {/* Company Name */}
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter company name"
              required
            />
          </div>

          {/* Company Logo */}
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Company Logo URL
            </label>
            <input
              type="url"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Paste logo image URL"
            />
          </div>

          {/* Job Location */}
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Job Location
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="e.g., Dhaka, Remote"
              required
            />
          </div>

          {/* Skills Required */}
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Skills Required
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="React, Node.js, TailwindCSS"
            />
          </div>

          {/* Application Email */}
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Application Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="hr@company.com"
              required
            />
          </div>
        </div>

        {/* Full Width Submit Button */}
        <div className="col-span-1 md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-12 rounded-lg shadow-lg text-lg transition-colors"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
}

export default JobPostpage;
