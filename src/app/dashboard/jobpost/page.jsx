"use client";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import Select from "react-select";


const tagOptions = [
  { value: "grant", label: "Grant" },
  { value: "new", label: "New" },
  { value: "remote", label: "Remote" },
  { value: "fulltime", label: "Full-time" },
  { value: "parttime", label: "Part-time" },
  { value: "internship", label: "Internship" },
];

export default function JobPostpage() {
  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    if (!session || session.user.role !== "company") {
      alert("Only companies can post jobs!");
      return;
    }

    // tags hobe array of values
    const tags = data.tags?.map(tag => tag.value) || [];

    try {
      const jobData = {
        ...data,
        tags,
        companyId: session.user.id,
        companyName: session.user.companyName || session.user.name,
        companyEmail: session.user.email,
        companyWebsite: session.user.companyWebsite || "",
        companyLocation: session.user.companyLocation || "",
        companyLogo: session.user.image || "",
      };

      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobData),
      });

      const result = await res.json();
      if (result.success) {
        alert("Job posted successfully!");
        reset();
      } else alert("Error: " + result.message);
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-10 text-center">
        Post a New Job
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-2xl shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Title */}
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Job Title
            </label>
            <input
              {...register("title", { required: true })}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter job title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">Title is required</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Job Description
            </label>
            <textarea
              {...register("description", { required: true })}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Describe the job role and responsibilities"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                Description is required
              </p>
            )}
          </div>

          {/* Job Type */}
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Job Type
            </label>
            <select
              {...register("jobType", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select job type</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
              <option value="Remote">Remote</option>
            </select>
            {errors.jobType && (
              <p className="text-red-500 text-sm mt-1">Job type is required</p>
            )}
          </div>

          {/* Salary */}
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Salary Range
            </label>
            <input
              {...register("salary")}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="$1000 - $2000/mo"
            />
          </div>

          {/* Application Deadline */}
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Application Deadline
            </label>
            <input
              {...register("applicationDeadline", { required: true })}
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            {errors.applicationDeadline && (
              <p className="text-red-500 text-sm mt-1">
                Deadline is required
              </p>
            )}
          </div>

          {/* Work Hours */}
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Weekly Work Hours
            </label>
            <input
              {...register("workHours")}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="e.g., 40 hrs/week"
            />
          </div>

          {/* Job Duration */}
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Job Duration
            </label>
            <input
              {...register("duration")}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="e.g., 6 months"
            />
          </div>

          {/* Job Period */}
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Job Period
            </label>
            <input
              {...register("jobPeriod")}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="e.g., Jan 23 - Aug 14, 2025"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <p className="text-gray-500 mb-4">
            Company info will be attached automatically from your account.
          </p>

          {/* Job Image */}
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Job Image URL
            </label>
            <input
              {...register("image")}
              type="url"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Paste job image URL"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Job Location
            </label>
            <input
              {...register("location", { required: true })}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="e.g., Dhaka, Remote"
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">
                Location is required
              </p>
            )}
          </div>

          {/* Skills */}
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Skills Required
            </label>
            <input
              {...register("skills")}
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
              {...register("applicationEmail", { required: true })}
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="hr@company.com"
            />
            {errors.applicationEmail && (
              <p className="text-red-500 text-sm mt-1">Email is required</p>
            )}
          </div>

          {/* Tags/Badges */}
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Tags / Badges
            </label>
            <Controller
              name="tags"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  isMulti
                  options={tagOptions}
                  className="react-select-container"
                  classNamePrefix="react-select"
                  placeholder="Select tags..."
                  value={tagOptions.filter(option => field.value?.map(v => v.value).includes(option.value))}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
        </div>

        {/* Submit */}
        <div className="col-span-1 md:col-span-2 flex justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-12 rounded-lg shadow-lg text-lg transition-colors"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
    
  )}

