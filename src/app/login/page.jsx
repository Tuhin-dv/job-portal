"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { signIn } from "next-auth/react";

// ✅ Zod schema validation
const schema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.string().nonempty("Select a role"),
  companyName: z.string().optional(),
  companyWebsite: z.string().optional(),
  companyLocation: z.string().optional(),
});

export default function LoginPage() {
  const [showCompanyForm, setShowCompanyForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { role: "user" },
  });

  // ✅ Credentials login
  const onSubmit = async (data) => {
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
      role: data.role,
      companyName: data.companyName,
      companyWebsite: data.companyWebsite,
      companyLocation: data.companyLocation,
    });

    if (res?.error) alert("❌ Invalid credentials");
    else {
      if (typeof window !== "undefined") {
        localStorage.setItem("showLoginToast", "1");
      }
      window.location.href =
        data.role === "company" ? "/dashboard" : "/";
    }
  };

  // ✅ Google login
  const handleGoogleLogin = async () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("showLoginToast", "1");
    }
    await signIn("google", { callbackUrl: "/" });
  };

  // ✅ Handle role change
  const handleRoleChange = (e) => {
    if (e.target.value === "company") setShowCompanyForm(true);
    else setShowCompanyForm(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              className="w-full px-4 py-2 mt-1 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              {...register("password")}
              className="w-full px-4 py-2 mt-1 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Role Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Login as
            </label>
            <select
              {...register("role")}
              className="w-full px-4 py-2 mt-1 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              onChange={handleRoleChange}
            >
              <option value="user">Job Seeker</option>
              <option value="company">Company</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm">{errors.role.message}</p>
            )}
          </div>

          {/* Conditional Company Info Form */}
          {showCompanyForm && (
            <div className="mt-4 p-4 border border-gray-300 rounded-xl bg-gray-50">
              <h3 className="font-semibold text-gray-700 mb-3">Company Info (Optional)</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    {...register("companyName")}
                    className="w-full px-4 py-2 mt-1 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    placeholder="Enter company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Company Website
                  </label>
                  <input
                    type="text"
                    {...register("companyWebsite")}
                    className="w-full px-4 py-2 mt-1 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    placeholder="Enter company website"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <input
                    type="text"
                    {...register("companyLocation")}
                    className="w-full px-4 py-2 mt-1 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    placeholder="Enter location"
                  />
                </div>

                <div className="flex items-end">
                  <button
                    type="button"
                    onClick={() => setShowCompanyForm(false)}
                    className="w-full py-2 text-sm text-indigo-600 font-medium hover:underline"
                  >
                    Skip
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition duration-300 mt-4"
          >
            Login
          </button>
        </form>

        {/* OR Divider */}
        <div className="my-6 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full py-2 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition duration-300"
        >
          Continue with Google
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-indigo-600 font-medium">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
