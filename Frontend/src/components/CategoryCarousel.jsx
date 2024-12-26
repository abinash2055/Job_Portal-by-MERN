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
  "DevOps Develper",
  "Fulter App Development",
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="relative py-16 bg-gradient-to-r from-[#3B82F6] via-[#9333EA] to-[#F43F5E] text-white">
      {/* Stylish Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70 pointer-events-none"></div>

      <h2 className="text-center text-5xl font-extrabold mb-8 tracking-wide text-white animate-bounce">
        Explore Top Career Categories
      </h2>

      <Carousel className="w-full max-w-6xl mx-auto">
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

        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white hover:text-[#3B82F6] text-4xl cursor-pointer z-10" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-[#3B82F6] text-4xl cursor-pointer z-10" />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;

// Done styles
