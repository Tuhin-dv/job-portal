"use client";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import JobCard from "@/components/JobCard";
import { LoadingSpinner } from "@/components/loadingSpinner/Loading";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/OurServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import WorksProcess from "@/components/WorksProcess";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("showLoginToast")) {
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        toast: true,
        position: "bottom-end",
        timer: 2000,
        showConfirmButton: false,
      });
      localStorage.removeItem("showLoginToast");
    }

    // Fetch latest jobs
    async function fetchJobs() {
      try {
        const res = await fetch("/api/jobs");
        const data = await res.json();
        if (data.success) {
          setJobs(data.jobs.slice(0, 6));
        }
      } catch (err) {
        // Optionally handle error
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <WorksProcess></WorksProcess>
      {/* Recently Posted Jobs Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12">
        <div className="max-w-[1600px] mx-auto py-12 px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Recently Posted Jobs</h2>
          {loading ? (
            <div className="border rounded-lg p-6 ">

              <LoadingSpinner />
            </div>
          ) : jobs.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
              {jobs.map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
            </div>
          ) : (
            <p className="text-center py-12">No jobs found.</p>
          )}
        </div>
      </section>
      <WhyChooseUs></WhyChooseUs>
      <OurServices></OurServices>



      <Footer />
    </>
  );
}

