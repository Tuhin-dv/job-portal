
"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.string().nonempty("Select a role"),
  companyName: z.string().optional(),
  companyWebsite: z.string().optional(),
  companyLocation: z.string().optional(),
});

export default function RegisterPage() {
  const [showCompanyForm, setShowCompanyForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { role: "user" },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        setSuccess("Registration successful! Please login.");
        reset();
      } else {
        setError(result.message || "Registration failed");
      }
    } catch (err) {
      setError("Registration failed");
    }
    setLoading(false);
  };

  const handleRoleChange = (e) => {
    if (e.target.value === "company") setShowCompanyForm(true);
    else setShowCompanyForm(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        {error && <p className="text-red-500 mb-2 text-center">{error}</p>}
        {success && <p className="text-green-600 mb-2 text-center">{success}</p>}
        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input type="text" {...register("name")} className="w-full px-3 py-2 border rounded placeholder:text-gray-400" placeholder="Enter your name" />
          {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input type="email" {...register("email")} className="w-full px-3 py-2 border rounded placeholder:text-gray-400" placeholder="Enter your email" />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input type="password" {...register("password")} className="w-full px-3 py-2 border rounded placeholder:text-gray-400" placeholder="Enter your password" />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        </div>
        <div className="mb-4">
          <label className="block mb-1">Register as</label>
          <select {...register("role")} className="w-full px-3 py-2 border rounded" onChange={handleRoleChange}>
            <option value="user">Job Seeker</option>
            <option value="company">Company</option>
          </select>
          {errors.role && <span className="text-red-500 text-sm">{errors.role.message}</span>}
        </div>
        {showCompanyForm && (
          <div className="mb-4 p-4 border border-gray-300 rounded-xl bg-gray-50">
            <h3 className="font-semibold text-gray-700 mb-3">Company Info (Optional)</h3>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Company Name</label>
              <input type="text" {...register("companyName")} className="w-full px-3 py-2 border rounded placeholder:text-gray-400" placeholder="Enter company name" />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Company Website</label>
              <input type="text" {...register("companyWebsite")} className="w-full px-3 py-2 border rounded placeholder:text-gray-400" placeholder="Enter company website" />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input type="text" {...register("companyLocation")} className="w-full px-3 py-2 border rounded placeholder:text-gray-400" placeholder="Enter location" />
            </div>
          </div>
        )}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mb-4" disabled={loading}>{loading ? "Registering..." : "Register"}</button>
        <div className="text-center mt-2">
          <a href="/login" className="text-blue-600 hover:underline">Already have an account? Login</a>
        </div>
      </form>
    </div>
  );
}