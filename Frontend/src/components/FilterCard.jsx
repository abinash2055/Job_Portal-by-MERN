import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "../redux/jobSlice";

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
      "Frontend Developer",
      "Backend Developer",
      "FullStack Developer",
      "Flutter App Developer",
      "UI/UX Designer",
    ],
  },
  {
    filterType: "Salary",
    array: [
      "0-30K",
      "30K-65K",
      "65K-90K",
      "90K-110K",
      "110K-140K",
      "140K-165K",
      "165K-200K",
    ],
  },
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]);

  return (
    <div className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105">
      <h1 className="font-extrabold text-2xl text-white mb-4">Filter Jobs</h1>
      <hr className="mb-4 border-t-2 border-white/50" />
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {filterData.map((data, index) => (
          <div key={index} className="mb-6">
            <h2 className="font-bold text-xl text-white mb-2">
              {data.filterType}
            </h2>
            {data.array.map((item, idx) => {
              const itemId = `id${index}-${idx}`;
              return (
                <div
                  key={itemId}
                  className="flex items-center space-x-4 my-3 bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  <RadioGroupItem
                    value={item}
                    id={itemId}
                    className="peer hidden"
                  />
                  <div className="peer-checked:bg-purple-700 peer-checked:ring-2 peer-checked:ring-white w-5 h-5 rounded-full border-2 border-white transition-all duration-300"></div>
                  <Label
                    htmlFor={itemId}
                    className="text-lg font-medium text-white cursor-pointer transition-colors duration-300 peer-checked:text-pink-200"
                  >
                    {item}
                  </Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;

// Done styles
