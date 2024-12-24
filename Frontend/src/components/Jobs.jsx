import React from "react";

import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";

// Array of Jobs
const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-200 min-h-[100vh]">
      <Navbar />
      <div className="max-w-8xl mx-auto mt-12 px-4">
        <div className="flex gap-7">
          {/* Left side filter panel */}
          <div className="w-full sm:w-[30%] lg:w-[25%] xl:w-[20%] bg-white shadow-2xl rounded-lg p-8 h-auto">
            <FilterCard />
          </div>

          {/* Right side - Jobs Display */}
          {jobsArray.length <= 0 ? (
            <div className="flex-1 flex justify-center items-center h-[88vh] text-2xl text-gray-700 font-semibold">
              <span>No jobs found. Sorry!!</span>
            </div>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-8">
              {/* Jobs grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {jobsArray.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-indigo-50 hover:border-2 hover:border-indigo-500"
                  >
                    <Job />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
