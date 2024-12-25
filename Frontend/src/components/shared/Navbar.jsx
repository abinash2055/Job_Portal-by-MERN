import React, { useState } from "react";
import "./LightDarkMode.css";
import logo from "../images/WebsiteLogo.jpg";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant";
import { setUser } from "../../redux/authSlice";

const Navbar = () => {
  // For Login and Register
  const { user } = useSelector((store) => store.auth);

  // For Logout
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="navbar bg-gradient-to-r from-blue-400 via-purple-300 to-pink-300">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-20">
        {/* Left Section: Logo and Title */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
          <h1 className="text-3xl font-bold">
            Job <span className="text-[#da4524]">Portal</span>
          </h1>
        </div>

        {/* Right Section: Navigation and Actions */}
        <div className="flex items-center gap-6">
          {/* Navigation Links */}
          <ul className="flex font-medium items-center gap-7">
            <li className="cursor-pointer hover:text-[#5c44e6] text-xl font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-[#5c44e6] text-xl font-bold">
              <Link to="/jobs">Jobs</Link>
            </li>
            <li className="cursor-pointer hover:text-[#5c44e6] text-xl font-bold">
              <Link to="/browse">Browse</Link>
            </li>
          </ul>

          {/* User Login/Logout Section */}
          {!user ? (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={user?.profile?.profilePhoto} />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                {/* User Information */}
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="User Avatar"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{user?.fullname}</h4>
                    <p className="text-sm text-muted-foreground">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>

                {/* User Actions */}
                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex items-center gap-2">
                    <User2 className="text-blue-800" />
                    <button className="text-blue-800 hover:underline">
                      <Link to="/profile">View Profile</Link>
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <LogOut className="text-red-700" />
                    <button
                      className="text-red-700 hover:underline"
                      onClick={logoutHandler}
                    >
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
                  onClick={logoutHandler}
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
