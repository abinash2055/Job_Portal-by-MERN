import React from "react";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

// Category Array
const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Scientist",
  "Data Analytics",
  "Graphics Designer",
  "Full-Stack Developer",
  "UI/UX Designer",
  "DevOps Engineer",
  "Project Manager",
  "Product Manager",
  "Marketing Specialist",
  "SEO Specialist",
  "Cloud Architect",
];

const CategoryCarousel = () => {
  return (
    <div className="bg-gradient-to-r from-[#6A38C2] to-[#F83002] py-16">
      {/* For Title of Jobs  */}
      <h2 className="text-3xl text-center text-white font-bold mb-8">
        Explore Job Categories
      </h2>

      {/* Carousel Section */}
      <Carousel className="w-full max-w-xl mx-auto my-5">
        {/* To get data from the array  as content*/}
        <CarouselContent className="flex gap-6">
          {/* To map style of each data  */}
          {category.map((cat, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg-basis-1/3">
              <Button
                variant="outline"
                className="rounded-full px-6 py-3 text-lg font-semibold text-[#6A38C2] border-2 border-[#6A38C2] hover:bg-[#6A38C2] hover:text-white transition-all duration-300 ease-in-out"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* To show array in Carousel data as Navigation */}
        <div className="flex justify-between absolute top-1/2 left-0 right-0">
          <CarouselPrevious className="text-blue text-2xl hover:text-[#6A38C2] transition-all duration-300 ease-in-out" />
          <CarouselNext className="text-blue text-2xl hover:text-[#6A38C2] transition-all duration-300 ease-in-out" />
        </div>
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
