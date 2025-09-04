import { notFound } from "next/navigation";
import { jobsData } from "@/components/Jobs";
import Navbar from "@/components/Navbar";

export default function JobDetailsPage({ params }) {
    const job = jobsData.find((job) => job.id.toString() === params.id);

    if (!job) return notFound();

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar></Navbar>

            <div className="p-6 max-w-7xl mx-auto border bg-white text-black  border-gray-300 rounded-lg shadow-md mt-20 ">
                <h1 className="text-2xl font-bold">{job.title}</h1>
                <p className="mt-2">{job.description}</p>
                <p className="mt-2 text-gray-600">Type: {job.jobType}</p>
                <p className="mt-2 text-gray-600">Salary: {job.salary}</p>
            </div>
        </div>

    );
}
// Cwcq$3y4AVUL-b8 password / Job-Portal