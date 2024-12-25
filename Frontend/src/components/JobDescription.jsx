import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const JobDescription = () => {
  const isApplied = false;

  return (
    <div className="max-w-6xl mx-auto my-10 px-6 bg-gradient-to-tr from-pink-100 via-purple-100 to-blue-100 p-8 rounded-xl shadow-2xl">
      {/* Job Title and Details Section */}
      <div className="flex items-center justify-between bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 p-6 rounded-lg shadow-lg text-white">
        <div>
          {/* Job Title */}
          <h1 className="text-4xl font-extrabold leading-snug">
            Frontend Developer
          </h1>

          {/* Job Details */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Badge className="bg-blue-200 text-blue-900 font-medium px-4 py-1 rounded-full shadow-sm hover:bg-blue-300">
              10 Positions
            </Badge>
            <Badge className="bg-gray-200 text-gray-800 font-medium px-4 py-1 rounded-full shadow-sm hover:bg-gray-300">
              Full Time
            </Badge>
            <Badge className="bg-yellow-200 text-yellow-900 font-medium px-4 py-1 rounded-full shadow-sm hover:bg-yellow-300">
              30 LPA
            </Badge>
          </div>
        </div>

        {/* Apply Button */}
        <Button
          disabled={isApplied}
          className={`py-3 px-8 text-base font-semibold rounded-lg shadow-md transition-all duration-300 ${
            isApplied
              ? "bg-gray-400 text-gray-200 cursor-not-allowed"
              : "bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white hover:opacity-90"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>

      {/* Job Description Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white p-6 mt-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-purple-700 border-b-4 border-purple-400 pb-2">
          Job Description
        </h2>

        <div className="mt-6 space-y-6">
          <div className="flex items-center gap-4 bg-gradient-to-r from-blue-200 to-blue-300 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-blue-900">Role:</h3>
            <span className="text-blue-800">Frontend Developer</span>
          </div>

          <div className="flex items-center gap-4 bg-gradient-to-r from-green-200 to-green-300 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-green-900">Location:</h3>
            <span className="text-green-800">Kapilvastu</span>
          </div>

          <div className="flex items-center gap-4 bg-gradient-to-r from-yellow-200 to-yellow-300 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-yellow-900">Description:</h3>
            <span className="text-yellow-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              ipsa.
            </span>
          </div>

          <div className="flex items-center gap-4 bg-gradient-to-r from-pink-200 to-pink-300 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-pink-900">Experience:</h3>
            <span className="text-pink-800">3 years</span>
          </div>

          <div className="flex items-center gap-4 bg-gradient-to-r from-purple-200 to-purple-300 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-purple-900">Salary:</h3>
            <span className="text-purple-800">10 LPA</span>
          </div>

          <div className="flex items-center gap-4 bg-gradient-to-r from-gray-200 to-gray-300 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-900">Total Applicants:</h3>
            <span className="text-gray-800">5</span>
          </div>

          <div className="flex items-center gap-4 bg-gradient-to-r from-indigo-200 to-indigo-300 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-indigo-900">Posted Date:</h3>
            <span className="text-indigo-800">24-12-2024</span>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gradient-to-r from-teal-400 via-green-400 to-blue-400 p-6 mt-8 rounded-lg shadow-md text-center text-white">
        <p className="text-lg font-medium">
          Looking forward to your application!
        </p>
      </div>
    </div>
  );
};

export default JobDescription;
