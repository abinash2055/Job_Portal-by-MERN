import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Badge } from "./ui/badge";
import { Avatar, AvatarImage } from "./ui/avatar";

const Job = () => {
  return (
    <div className="p-6 rounded-xl shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-500">2 days ago</p>

        {/* Bookmark Button */}
        <Button
          variant="outline"
          className="rounded-full border-2 border-gray-300 p-2 hover:bg-gray-100 transition-colors"
          size="icon"
        >
          <Bookmark />
        </Button>
      </div>

      {/* Company Logo and Info */}
      <div className="flex items-center gap-4 my-4">
        <Button
          className="p-2 bg-white rounded-full border-2 border-teal-500 shadow-md hover:shadow-lg transition-all duration-300"
          variant="outline"
          size="icon"
        >
          <Avatar>
            <AvatarImage
              src="https://img.freepik.com/premium-vector/minimalist-type-creative-business-logo-template_1283348-23026.jpg?semt=ais_hybrid"
              alt="Company Logo"
              className="rounded-full"
            />
          </Avatar>
        </Button>

        {/* Company Name */}
        <div>
          <h1 className="text-lg font-semibold text-gray-800">Company Name</h1>
          <p className="text-sm text-gray-500">Nepal</p>
        </div>
      </div>

      {/* Job Title and Description */}
      <div>
        <h1 className="text-xl font-semibold text-gray-900">Job Title</h1>
        <p className="text-sm text-gray-600 mt-2 leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          animi qui quasi eaque molestiae. Assumenda perferendis laudantium
          illum provident totam?
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap items-center gap-3 mt-4">
        <Badge className="bg-blue-100 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-sm hover:bg-gray-200 transition-all duration-200">
          10 Positions
        </Badge>
        <Badge className="bg-red-100 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-sm hover:bg-gray-200 transition-all duration-200">
          Full Time
        </Badge>
        <Badge className="bg-green-100 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-sm hover:bg-gray-200 transition-all duration-200">
          30 LPA
        </Badge>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-6 mt-6">
        <Button
          variant="outline"
          className="px-6 py-2 rounded-lg text-gray-700 font-semibold border-2 border-gray-400 hover:bg-gray-100 transition-all"
        >
          Details
        </Button>
        <Button className="bg-[#7209b7] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#9b4dca] transition-all duration-200">
          Save for Later
        </Button>
      </div>
    </div>
  );
};

export default Job;
