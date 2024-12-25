import React from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";

// Array of random jobs
const randomJobs = [1, 2, 3, 4, 5];

const Browse = () => {
  return (
    <div className="min-h-screen relative overflow-hidden text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r animate-gradient-flow from-purple-500 via-pink-500 to-yellow-500 opacity-90"></div>

      {/* Content Overlay */}
      <div className="relative z-10">
        <Navbar />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto py-16 px-4">
          {/* Heading Section */}
          <div className="text-center">
            <h1 className="text-5xl font-extrabold drop-shadow-md">
              Search Results{" "}
              <span className="text-yellow-300">({randomJobs.length})</span>
            </h1>
            <p className="text-lg text-yellow-100 mt-4">
              Explore the perfect opportunities tailored for your success.
            </p>
          </div>

          {/* Job Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {randomJobs.map((item, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-white/20 to-white/10 rounded-xl shadow-xl overflow-hidden group hover:scale-105 transition-transform duration-300"
              >
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Job Card */}
                <div className="relative p-6">
                  <Job />
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          {randomJobs.length === 0 && (
            <div className="text-center mt-16">
              <h2 className="text-3xl font-semibold text-yellow-200">
                No results found.
              </h2>
              <p className="text-yellow-100 mt-2">
                Adjust your filters and try again to find your dream job.
              </p>
              <button className="mt-6 px-8 py-3 bg-yellow-400 text-black rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300 font-semibold">
                Search Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Browse;
