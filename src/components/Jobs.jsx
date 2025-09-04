import React from 'react';
import JobCard from './JobCard';

export const jobsData = [
    {
        id: 1,
        title: 'Frontend Developer',
        description: 'Build and maintain user interfaces with React.',
        companyLogo: '/logo.svg',
        jobType: 'Full Time',
        salary: '$1200 - $2000/mo',
    },
    {
        id: 2,
        title: 'Backend Developer',
        description: 'Develop robust backend APIs and services.',
        companyLogo: '/logo.svg',
        jobType: 'Part Time',
        salary: '$800 - $1500/mo',
    },
    {
        id: 3,
        title: 'UI/UX Designer',
        description: 'Design intuitive user experiences and interfaces.',
        companyLogo: '/logo.svg',
        jobType: 'Full Time',
        salary: '$1000 - $1800/mo',
    },
    {
        id: 4,
        title: 'Mobile App Developer',
        description: 'Create mobile applications for iOS and Android.',
        companyLogo: '/logo.svg',
        jobType: 'Remote',
        salary: '$1300 - $2200/mo',
    },
    {
        id: 5,
        title: 'Graphics Designer',
        description: 'Design graphics and visual content for marketing.',
        companyLogo: '/logo.svg',
        jobType: 'Contract',
        salary: '$900 - $1600/mo',
    },
    {
        id: 6,
        title: 'Digital Marketer',
        description: 'Plan and execute digital marketing campaigns.',
        companyLogo: '/logo.svg',
        jobType: 'Full Time',
        salary: '$1100 - $1700/mo',
    },
    {
        id: 7,
        title: 'Data Analyst',
        description: 'Analyze data and generate actionable insights.',
        companyLogo: '/logo.svg',
        jobType: 'Part Time',
        salary: '$900 - $1400/mo',
    },
    {
        id: 8,
        title: 'Sales Executive',
        description: 'Drive sales and build client relationships.',
        companyLogo: '/logo.svg',
        jobType: 'Full Time',
        salary: '$1000 - $1800/mo',
    },
    {
        id: 9,
        title: 'Content Writer',
        description: 'Write engaging content for blogs and websites.',
        companyLogo: '/logo.svg',
        jobType: 'Remote',
        salary: '$700 - $1200/mo',
    },
    {
        id: 10,
        title: 'SEO Specialist',
        description: 'Optimize websites for search engines.',
        companyLogo: '/logo.svg',
        jobType: 'Full Time',
        salary: '$1000 - $1600/mo',
    },
    {
        id: 11,
        title: 'HR Manager',
        description: 'Manage recruitment and employee relations.',
        companyLogo: '/logo.svg',
        jobType: 'Full Time',
        salary: '$1200 - $2000/mo',
    },
    {
        id: 12,
        title: 'Project Manager',
        description: 'Lead project teams and ensure timely delivery.',
        companyLogo: '/logo.svg',
        jobType: 'Contract',
        salary: '$1300 - $2100/mo',
    },
    {
        id: 13,
        title: 'Business Analyst',
        description: 'Analyze business processes and recommend improvements.',
        companyLogo: '/logo.svg',
        jobType: 'Full Time',
        salary: '$1100 - $1800/mo',
    },
    {
        id: 14,
        title: 'Network Engineer',
        description: 'Maintain and troubleshoot network infrastructure.',
        companyLogo: '/logo.svg',
        jobType: 'Full Time',
        salary: '$1200 - $2000/mo',
    },
    {
        id: 15,
        title: 'System Administrator',
        description: 'Manage servers and IT systems.',
        companyLogo: '/logo.svg',
        jobType: 'Full Time',
        salary: '$1200 - $2000/mo',
    },
    {
        id: 16,
        title: 'QA Engineer',
        description: 'Test software and ensure quality standards.',
        companyLogo: '/logo.svg',
        jobType: 'Part Time',
        salary: '$900 - $1400/mo',
    },
    {
        id: 17,
        title: 'DevOps Engineer',
        description: 'Automate deployment and manage cloud infrastructure.',
        companyLogo: '/logo.svg',
        jobType: 'Full Time',
        salary: '$1300 - $2200/mo',
    },
    {
        id: 18,
        title: 'Support Specialist',
        description: 'Provide technical support to customers.',
        companyLogo: '/logo.svg',
        jobType: 'Remote',
        salary: '$800 - $1300/mo',
    },
    {
        id: 19,
        title: 'Product Manager',
        description: 'Define product vision and strategy.',
        companyLogo: '/logo.svg',
        jobType: 'Full Time',
        salary: '$1400 - $2300/mo',
    },
    {
        id: 20,
        title: 'Accountant',
        description: 'Manage financial records and transactions.',
        companyLogo: '/logo.svg',
        jobType: 'Contract',
        salary: '$1000 - $1700/mo',
    },
    {
        id: 21,
        title: 'Legal Advisor',
        description: 'Provide legal guidance and support.',
        companyLogo: '/logo.svg',
        jobType: 'Part Time',
        salary: '$1100 - $1800/mo',
    },
    {
        id: 22,
        title: 'Operations Manager',
        description: 'Oversee daily operations and process improvements.',
        companyLogo: '/logo.svg',
        jobType: 'Full Time',
        salary: '$1300 - $2100/mo',
    },
    {
        id: 23,
        title: 'Marketing Manager',
        description: 'Develop and execute marketing strategies.',
        companyLogo: '/logo.svg',
        jobType: 'Full Time',
        salary: '$1200 - $2000/mo',
    },
    {
        id: 24,
        title: 'Recruiter',
        description: 'Source and hire top talent for clients.',
        companyLogo: '/logo.svg',
        jobType: 'Contract',
        salary: '$1000 - $1700/mo',
    },
    {
        id: 25,
        title: 'Customer Success Manager',
        description: 'Ensure customer satisfaction and retention.',
        companyLogo: '/logo.svg',
        jobType: 'Full Time',
        salary: '$1200 - $2000/mo',
    },
];

function Jobs() {
    return (
        <div className='bg-gray-100'>
            <h1 className='text-3xl font-bold text-black text-center pt-6 mb-6'>Current Jobs</h1>
            <div className="max-w-[1700px]  mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8">
                {jobsData.map(job => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </div>
    );
}

export default Jobs;