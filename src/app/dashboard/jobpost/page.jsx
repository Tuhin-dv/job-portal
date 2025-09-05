"use client";
import { useState } from "react";

function JobPostpage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    jobType: "",
    salary: "",
    applicationDeadline: "",
    company: "",
    logo: "",
    location: "",
    skills: "",
    applicationEmail: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) alert("Job posted successfully!");
      else alert("Error: " + data.message);
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-10 text-center">
        Post a New Job
      </h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">Job Title</label>
            <input name="title" value={form.title} onChange={handleChange} type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" placeholder="Enter job title" required />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">Job Description</label>
            <textarea name="description" value={form.description} onChange={handleChange} rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" placeholder="Describe the job role and responsibilities" required />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">Job Type</label>
            <select name="jobType" value={form.jobType} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" required>
              <option value="">Select job type</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">Salary Range</label>
            <input name="salary" value={form.salary} onChange={handleChange} type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" placeholder="$1000 - $2000/mo" required />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">Application Deadline</label>
            <input name="applicationDeadline" value={form.applicationDeadline} onChange={handleChange} type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" required />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">Company Name</label>
            <input name="company" value={form.company} onChange={handleChange} type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" placeholder="Enter company name" required />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">Company Logo URL</label>
            <input name="logo" value={form.logo} onChange={handleChange} type="url" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" placeholder="Paste logo image URL" />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">Job Location</label>
            <input name="location" value={form.location} onChange={handleChange} type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" placeholder="e.g., Dhaka, Remote" required />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">Skills Required</label>
            <input name="skills" value={form.skills} onChange={handleChange} type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" placeholder="React, Node.js, TailwindCSS" />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">Application Email</label>
            <input name="applicationEmail" value={form.applicationEmail} onChange={handleChange} type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" placeholder="hr@company.com" required />
          </div>
        </div>

        {/* Submit */}
        <div className="col-span-1 md:col-span-2 flex justify-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-12 rounded-lg shadow-lg text-lg transition-colors">
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
}

export default JobPostpage;
