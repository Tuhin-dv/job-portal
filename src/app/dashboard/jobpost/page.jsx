"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";

export default function JobPostpage() {
  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

const onSubmit = async (data) => {
  if (!session || session.user.role !== "company") {
    alert("Only companies can post jobs!");
    return;
  }

  try {
    // attach correct company info from session
    const jobData = {
      ...data,
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
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Job Title
            </label>
            <input
              {...register("title", { required: true })}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
              placeholder="Enter job title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">Title is required</p>
            )}
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Job Description
            </label>
            <textarea
              {...register("description", { required: true })}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
              placeholder="Describe the job role and responsibilities"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">Description is required</p>
            )}
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Job Type
            </label>
            <select
              {...register("jobType", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
            >
              <option className="text-black" value="">
                Select job type
              </option>
              <option className="text-gray-400" value="Full Time">
                Full Time
              </option>
              <option className="text-gray-400" value="Part Time">
                Part Time
              </option>
              <option className="text-gray-400" value="Contract">
                Contract
              </option>
              <option className="text-gray-400" value="Remote">
                Remote
              </option>
            </select>
            {errors.jobType && (
              <p className="text-red-500 text-sm mt-1">Job type is required</p>
            )}
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Salary Range
            </label>
            <input
              {...register("salary")}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
              placeholder="$1000 - $2000/mo"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Application Deadline
            </label>
            <input
              {...register("applicationDeadline", { required: true })}
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
            />
            {errors.applicationDeadline && (
              <p className="text-red-500 text-sm mt-1">Deadline is required</p>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <p className="text-gray-500 mb-4">
            Company info will be attached automatically from your account.
          </p>
          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Job Image URL
            </label>
            <input
              {...register("image")}
              type="url"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
              placeholder="Paste job image URL"
            />
          </div>


          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Job Location
            </label>
            <input
              {...register("location", { required: true })}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
              placeholder="e.g., Dhaka, Remote"
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">Location is required</p>
            )}
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Skills Required
            </label>
            <input
              {...register("skills")}
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
              placeholder="React, Node.js, TailwindCSS"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2 text-gray-700">
              Application Email
            </label>
            <input
              {...register("applicationEmail", { required: true })}
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
              placeholder="hr@company.com"
            />
            {errors.applicationEmail && (
              <p className="text-red-500 text-sm mt-1">Email is required</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
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
  );
}
