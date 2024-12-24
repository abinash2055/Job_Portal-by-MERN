import React from "react";
import { RadioGroup } from "./ui/radio-group";
import { RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

// Array of filters
const filterData = [
  {
    filterType: "Location",
    array: [
      "Province 1",
      "Province 2",
      "Province 3",
      "Province 4",
      "Province 5",
      "Province 6",
      "Province 7",
    ],
  },
  {
    filterType: "Industry",
    array: [
      "Flutter Developer",
      "Data Analytics",
      "Graphics Designer",
      "Full-Stack/MERN Developer",
      "UI/UX Designer",
      "DevOps Engineer",
      "Digital Marketing",
    ],
  },
  {
    filterType: "Salary",
    array: [
      "0 - 30K",
      "30K - 60K",
      "60K - 90K",
      "90K - 110K",
      "110K - 140K",
      "140K - 160K",
      "160K - 180K",
      "180K - 200K",
    ],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-200 via-blue-200 to-indigo-200 p-3 rounded-xl shadow-lg">
      <h1 className="font-bold text-2xl text-gray-800 mb-1">Filter Jobs</h1>

      <RadioGroup className="space-y-2">
        {filterData.map((data, index) => (
          <div
            key={index}
            className="p-3 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="font-semibold text-xl text-gray-700">
              {data.filterType}
            </h2>

            {data.array && data.array.length > 0 ? (
              data.array.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 my-2">
                  <RadioGroupItem
                    value={item}
                    className="h-4 w-4 border-2 border-gray-400 text-indigo-500 focus:ring-indigo-500 focus:ring-offset-2 hover:cursor-pointer"
                  />
                  <Label className="text-gray-700 font-medium hover:text-indigo-500 hover:cursor-pointer">
                    {item}
                  </Label>
                </div>
              ))
            ) : (
              <p className="text-gray-500 italic">No options available</p>
            )}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
