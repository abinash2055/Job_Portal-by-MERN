import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "../redux/jobSlice";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
  "DevOps Developer",
  "Flutter App Development",
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="relative py-16 bg-gradient-to-r from-[#3B82F6] via-[#9333EA] to-[#F43F5E] text-white overflow-hidden">
      {/* Stylish Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 pointer-events-none"></div>

      {/* Header Section */}
      <div className="relative z-10 text-center mb-8 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide animate-bounce mb-2">
          Explore Top Career Categories
        </h2>
        <p className="text-lg md:text-xl">
          Find your dream job from the top career categories we have curated
          just for you.
        </p>
      </div>

      {/* Carousel Section */}
      <Carousel className="w-full max-w-6xl mx-auto relative z-10">
        <CarouselContent className="flex gap-8">
          {category.map((cat, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center items-center transform transition-transform hover:scale-110"
            >
              <Button
                onClick={() => searchJobHandler(cat)}
                variant="outline"
                className="rounded-full px-8 py-4 text-lg font-semibold border-2 border-white bg-[#9333EA] text-white hover:bg-white hover:text-[#3B82F6] transition-colors duration-300 shadow-lg"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#3B82F6] text-4xl cursor-pointer z-10" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#3B82F6] text-4xl cursor-pointer z-10" />
      </Carousel>

      {/* Call to Action Section */}
      <div className="relative z-10 mt-8 text-center">
        <p className="text-lg font-medium">
          Ready to start your career journey? Click on a category to explore
          jobs now!
        </p>
      </div>
    </div>
  );
};

export default CategoryCarousel;

// Done styles
