import Image from "next/image"
import JobStats from "./JobState"
import bannerImg from '../assets/BannerImg.png'
function Hero() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-slate-50 to-white min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/20 via-transparent to-transparent"></div>

        <div className="relative z-10 w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Find The Job That Fits{" "}
                  <span className="text-blue-600 relative">
                    Your Life
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-100 rounded-full"></div>
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
                  Explore thousands of job opportunities and take the next step in your career. Discover roles tailored
                  to your skills and ambitions.
                </p>
              </div>

              <div className="w-full">
                <form className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2">
                  <div className="flex flex-col sm:flex-row gap-2">
                    {/* Job Title Input */}
                    <div className="flex-1 flex items-center gap-3 px-4 py-3 min-w-0">
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V8m8 0V6a2 2 0 00-2-2H10a2 2 0 00-2 2v2"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        placeholder="Job title, skill, or industry"
                        className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 text-sm font-medium min-w-0"
                      />
                    </div>

                    {/* Divider - hidden on mobile */}
                    <div className="hidden sm:block w-px bg-gray-200 my-2"></div>

                    {/* Category Dropdown */}
                    <div className="flex-1 flex items-center gap-3 px-4 py-3 min-w-0">
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <select className="flex-1 bg-transparent  border-none outline-none text-gray-700 text-sm font-medium cursor-pointer min-w-0">
                        <option value="">Any Category</option>
                        <option value="web">Web Development</option>
                        <option value="uiux">UI/UX Design</option>
                        <option value="graphics">Graphics Design</option>
                        <option value="app">App Development</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="data">Data Analysis</option>
                      </select>
                    </div>

                    {/* Search Button */}
                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <span className="hidden sm:inline">Search Jobs</span>
                      <span className="sm:hidden">Search</span>
                    </button>
                  </div>
                </form>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>1000+ Active Jobs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Top Companies</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Remote Friendly</span>
                </div>
              </div>
            </div>

            <div className="relative lg:justify-self-end">
              <div className="relative">
                <Image
                  src={bannerImg}
                  alt="Professional job search illustration"
                 
                  className="w-full h-auto max-w-lg mx-auto lg:max-w-none"
                  priority
                />
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-3xl blur-3xl -z-10 transform scale-110"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <JobStats />
    </div>
  )
}

export default Hero
