import React from 'react'

const services = [
  {
    icon: (
      <span className="text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-16 h-16 mx-auto">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </span>
    ),
    title: 'Web & Software',
    desc: 'Lorem ipsum dolor sit amet, our consectetur adipisicing elit.'
  },
  {
    icon: (
      <span className="text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-16 h-16 mx-auto text-blue-500">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <rect x="9" y="9" width="6" height="6" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </span>
    ),
    title: 'Data Science & Analitycs',
    desc: 'Lorem ipsum dolor sit amet, our consectetur adipisicing elit.'
  },
  {
    icon: (
      <span className="text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-16 h-16 mx-auto text-blue-500">
          <rect x="6" y="8" width="12" height="8" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="18" cy="10" r="1.5" fill="currentColor" />
        </svg>
      </span>
    ),
    title: 'Accounting & Consulting',
    desc: 'Lorem ipsum dolor sit amet, our consectetur adipisicing elit.'
  },
  {
    icon: (
      <span className="text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-16 h-16 mx-auto text-blue-500">
          <rect x="7" y="7" width="10" height="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M9 9h6v6H9z" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </span>
    ),
    title: 'Writing & Translations',
    desc: 'Lorem ipsum dolor sit amet, our consectetur adipisicing elit.'
  },
  {
    icon: (
      <span className="text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-16 h-16 mx-auto text-blue-500">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M8 16l4-4 4 4" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </span>
    ),
    title: 'Sales & Marketing',
    desc: 'Lorem ipsum dolor sit amet, our consectetur adipisicing elit.'
  },
  {
    icon: (
      <span className="text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-16 h-16 mx-auto text-blue-500">
          <rect x="7" y="7" width="10" height="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </span>
    ),
    title: 'Graphics & Design',
    desc: 'Lorem ipsum dolor sit amet, our consectetur adipisicing elit.'
  },
  {
    icon: (
      <span className="text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-16 h-16 mx-auto text-blue-500">
          <rect x="6" y="8" width="12" height="8" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="18" cy="10" r="1.5" fill="currentColor" />
        </svg>
      </span>
    ),
    title: 'Digital Marketing',
    desc: 'Lorem ipsum dolor sit amet, our consectetur adipisicing elit.'
  },
  {
    icon: (
      <span className="text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-16 h-16 mx-auto text-blue-500">
          <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </span>
    ),
    title: 'Education & Training',
    desc: 'Lorem ipsum dolor sit amet, our consectetur adipisicing elit.'
  }
];


function OurServices() {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h2 className="text-5xl font-extrabold text-[#3d217f] mb-4">Our Services</h2>
        <div className="flex justify-center mb-8">
          <span className="w-24 h-1 bg-[#3d217f] rounded-full"></span>
          <span className="mx-2 w-6 h-1 bg-blue-500 rounded-full"></span>
          <span className="w-24 h-1 bg-[#3d217f] rounded-full"></span>
        </div>
        <p className="text-lg text-gray-600 mb-8">We offer a variety of services to help you achieve your goals.</p>
      </div>
      <div className="max-w-[1700px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-2 border border-[#f3f3f3]">
            {service.icon}
            <h3 className="mt-6 text-lg md:text-xl font-extrabold text-[#222] mb-2">{service.title}</h3>
            <p className="text-gray-600 text-base mb-4">{service.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-md transition-colors">
          Browse All Categories
        </button>
      </div>
    </section>
  );
}

export default OurServices
