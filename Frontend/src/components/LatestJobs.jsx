import React from "react";
import LatestJobCards from "./LatestJobCards";

// Create a mock array of jobs
const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center text-[#565fdb] mb-12 leading-snug">
          <span className="bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
            Latest & Top
          </span>{" "}
          <span className="text-gray-800 animate-bounce">Job Openings</span>
        </h1>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {randomJobs.slice(0, 6).map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl shadow-md bg-gradient-to-br from-blue-100 via-white to-purple-100 
              hover:shadow-2xl hover:scale-105 transform transition-all duration-500 delay-${
                index * 100
              }`}
            >
              <LatestJobCards />
            </div>
          ))}
        </div>

        {/* Button to View More */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-gradient-to-r from-teal-400 to-purple-500 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            View All Jobs
          </button>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-teal-400/20 rounded-full blur-xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl -z-10"></div>
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-br from-teal-400 to-purple-500 opacity-10 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

export default LatestJobs;
