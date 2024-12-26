import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant";
import { setUser } from "../../redux/authSlice";
import { toast } from "sonner";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
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
    <div className="bg-gradient-to-r from-[#3846c2] to-[#F83002] shadow-xl animate-pulse">
      <div className="flex items-center justify-between mx-auto max-w-8xl h-24 pr-14 pl-12">
        {/* Title Section */}
        <div className="flex justify-between items-center w-full p-4">
          <h1 className="text-5xl font-extrabold text-white animate-bounce">
            Personal <span className="p-2 text-orange-400">Job</span>
            <span className="p-2 text-yellow-400">Portal</span>
          </h1>
        </div>

        <div className="flex items-center gap-16 justify-between">
          {/* Navigation Links */}
          <ul className="flex font-semibold items-center gap-10 text-white text-lg justify-between transition-all duration-300">
            {user && user.role === "recruiter" ? (
              <>
                <li>
                  <Link
                    to="/admin/companies"
                    className="hover:text-yellow-400 transition-all duration-200 text-xl transform hover:scale-105"
                  >
                    Companies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/jobs"
                    className="hover:text-yellow-400 transition-all duration-200 text-xl transform hover:scale-105"
                  >
                    Jobs
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/"
                    className="hover:text-yellow-400 transition-all duration-200 text-3xl transform hover:scale-105 font-bold"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jobs"
                    className="hover:text-yellow-400 transition-all duration-200 text-3xl transform hover:scale-105 font-bold"
                  >
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/browse"
                    className="hover:text-yellow-400 transition-all duration-200 text-3xl transform hover:scale-105 font-bold"
                  >
                    Browse
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* Authentication Buttons */}
          {!user ? (
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="text-2xl py-3 px-6 text-black hover:border-yellow-400 hover:bg-black-400  transition-all duration-200 transform hover:scale-105"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-purple-600 hover:bg-purple-800 text-2xl py-3 px-6 transition-all duration-200 transform hover:scale-105">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer transition-all duration-300 hover:scale-110">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 rounded-lg shadow-xl bg-white p-5 transform transition-all duration-300">
                <div className="flex gap-5 items-center">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-2xl text-[#333]">
                      {user?.fullname}
                    </h4>
                    <p className="text-lg text-muted-foreground">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col my-4 text-gray-600 space-y-4">
                  {user && user.role === "student" && (
                    <div className="flex items-center gap-3 cursor-pointer hover:bg-purple-800 hover:text-white p-3 rounded-md transition-all duration-200 text-lg transform hover:scale-105">
                      <User2 />
                      <Button variant="link">
                        <Link to="/profile">View Profile</Link>
                      </Button>
                    </div>
                  )}

                  <div className="flex items-center gap-3 cursor-pointer hover:bg-orange-600 hover:text-white p-3 rounded-md transition-all duration-200 text-lg transform hover:scale-105">
                    <LogOut />
                    <Button onClick={logoutHandler} variant="link">
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// Done styles
