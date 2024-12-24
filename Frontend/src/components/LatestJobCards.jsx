import React from "react";
import { Badge } from "./ui/badge";

const LatestJobCards = () => {
  return (
    <div className="p-6 rounded-3xl bg-white/40 backdrop-blur-lg shadow-xl border border-gray-200 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
      {/* Header with company info */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="font-bold text-2xl text-gray-800">Company Name</h1>
          <p className="text-sm text-gray-600">Nepal</p>
        </div>
        <div className="w-10 h-10 bg-gradient-to-r from-[#6a2fd1] to-[#ff7eb3] rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">C</span>
        </div>
      </div>

      {/* Job Title */}
      <div className="mb-6">
        <h2 className="font-extrabold text-xl text-gray-900 leading-tight">
          Senior Software Engineer
        </h2>
        <p className="text-base text-gray-700 mt-2">
          Join a dynamic team and work on exciting projects. Lorem ipsum dolor
          sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Job Details */}
      <div className="flex flex-wrap items-center gap-3 mt-4">
        <Badge className="bg-blue-100 text-blue-800 font-semibold py-2 px-4 rounded-lg shadow-sm hover:bg-blue-200 transition-all duration-200">
          10 Positions
        </Badge>
        <Badge className="bg-red-100 text-red-800 font-semibold py-2 px-4 rounded-lg shadow-sm hover:bg-red-200 transition-all duration-200">
          Full Time
        </Badge>
        <Badge className="bg-green-100 text-green-800 font-semibold py-2 px-4 rounded-lg shadow-sm hover:bg-green-200 transition-all duration-200">
          30 LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
