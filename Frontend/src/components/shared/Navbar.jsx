import React, { useState } from "react";
import "./LightDarkMode.css";

import logo from "../images/WebsiteLogo.jpg";
import { Button } from "../ui/button";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";

import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // For Login and Register
  const user = false;

  // For Dark and Light Mode
  const [darkMode, setDarkMode] = useState(false);

  // Toggle light/dark mode
  const toggleMode = () => setDarkMode((prevMode) => !prevMode);

  return (
    <div className={`navbar ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="flex items-center justify-between mx-auto max-w-7xl h-20">
        {/* Left Section: Logo and Title */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
          <h1 className="text-3xl font-bold">
            Job <span className="text-[#da4524]">Portal</span>
          </h1>
        </div>

        {/* Right Section: Navigation and Actions */}
        <div className="flex items-center gap-6 ">
          {/* Navigation Links */}
          <ul className="flex font-medium items-center gap-7">
            <li className="cursor-pointer hover:text-[#5c44e6] text-xl font-bold">
              Home
            </li>
            <li className="cursor-pointer hover:text-[#5c44e6] text-xl font-bold">
              Jobs
            </li>
            <li className="cursor-pointer hover:text-[#5c44e6] text-xl font-bold">
              Browse
            </li>
          </ul>

          {/* Light/Dark Mode Toggle */}
          <button
            className="mode-toggle text-2xl"
            onClick={toggleMode}
            aria-label="Toggle Light/Dark Mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* User Login/Logout Section */}
          {user ? (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="User Avatar"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                {/* User Information */}
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="User Avatar"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Pandey Web Developer</h4>
                    <p className="text-sm text-muted-foreground">
                      I am learning MERN as a practice
                    </p>
                  </div>
                </div>

                {/* User Actions */}
                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex items-center gap-2">
                    <User2 className="text-blue-800" />
                    <button className="text-blue-800 hover:underline">
                      View Profile
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <LogOut className="text-red-700" />
                    <button className="text-red-700 hover:underline">
                      Logout
                    </button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <div className="flex gap-4">
              {/* for Login Page  */}
              <Link to="/login">
                <Button
                  variant="outline"
                  className="text-black text-xl border-gray-400 hover:border-black hover:text-white hover:bg-black transition duration-300 px-6 py-2 rounded-lg font-bold"
                >
                  Login
                </Button>
              </Link>

              {/* For Signup Page  */}
              <Link to="/signup">
                <Button className="bg-[#bc20d1] text-white text-xl hover:bg-[#3f1a94] transition duration-300 px-6 py-2 rounded-lg font-bold">
                  SignUp
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
