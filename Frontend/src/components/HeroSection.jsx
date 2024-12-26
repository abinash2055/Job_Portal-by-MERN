import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "../redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="text-center min-h-screen flex flex-col justify-center bg-gradient-to-r from-[#6A38C2] via-[#F83002] to-[#FF6A00] text-white">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-6 py-3 rounded-full bg-white text-[#F83002] font-medium shadow-lg transform transition-transform duration-300 hover:scale-105 text-3xl">
          🚀 No. 1 Job Hunt Website 🚀
        </span>
        <h1 className="text-6xl font-extrabold animate-slideUp tracking-tight leading-tight">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-[#FFD700] glow-text">Dream Jobs</span>
        </h1>
        <p className="text-2xl mt-3 text-white/90 animate-fadeIn max-w-3xl mx-auto">
          Unlock endless opportunities with just a few clicks. Let your dreams
          take flight and land the job you’ve always wanted!
        </p>
        <div className="flex w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] shadow-lg border border-white/30 pl-3 rounded-full items-center gap-4 mx-auto mt-10 bg-white/20 backdrop-blur-md">
          <input
            type="text"
            placeholder="Find your dream jobs"
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full bg-transparent text-white placeholder-white/70 text-lg px-3 py-2"
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-r-full bg-[#FFD700] text-[#6A38C2] hover:bg-[#FFDF00] hover:text-[#4E1D90] transition-colors duration-300 font-bold"
          >
            <Search className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

// Done styles
