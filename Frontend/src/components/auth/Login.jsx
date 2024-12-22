import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/authSlice";
import { Loader2 } from "lucide-react";

const Login = () => {
  // To get All  data
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  // For Loading
  const { loading } = useSelector((store) => store.auth);
  // To navigate into other page
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // For storage of all data except file
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // To submit the all the data
  const submitHandler = async (e) => {
    e.preventDefault();

    // For API Call Method
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[95vh] bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center">
        <div className="bg-white w-full max-w-md rounded-lg shadow-xl p-8 transform hover:scale-105 transition-all">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Welcome Back!
          </h1>
          <p className="text-center text-gray-600 mb-8 italic">
            Please login to your account to continue.
          </p>

          <form onSubmit={submitHandler}>
            {/* Email Field */}
            <div className="mb-6 min-h-[5vh]">
              <Label className="block text-lg font-bold text-gray-700 mb-2">
                Email ID
              </Label>
              <Input
                type="email"
                value={input.email}
                name="email"
                onChange={changeEventHandler}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <Label className="block text-lg font-bold text-gray-700 mb-2">
                Password
              </Label>
              <Input
                type="password"
                value={input.password}
                name="password"
                onChange={changeEventHandler}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Role Selection */}
            <div className="mb-6">
              <Label className="block text-lg font-bold text-gray-700 mb-2">
                Select Your Role
              </Label>
              <RadioGroup className="flex justify-around">
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="student"
                    checked={input.role === "student"}
                    onChange={changeEventHandler}
                    className="cursor-pointer focus:ring-blue-500"
                  />
                  <Label className="text-gray-700 font-medium italic text-md">
                    Student
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="recruiter"
                    checked={input.role === "recruiter"}
                    onChange={changeEventHandler}
                    className="cursor-pointer focus:ring-blue-500"
                  />
                  <Label className="text-gray-700 font-medium italic text-md">
                    Recruiter
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Login Button */}
            {loading ? (
              <Button className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please Wait a moment...
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-purple-600 focus:ring-2 focus:ring-blue-300 focus:outline-none text-lg font-bold transition"
              >
                Login
              </Button>
            )}

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">OR</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
              <Button className="flex items-center justify-center bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition text-lg ">
                <i className="fab fa-google mr-2"></i> Google
              </Button>
              <Button className="flex items-center justify-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-lg">
                <i className="fab fa-facebook-f mr-2"></i> Facebook
              </Button>
            </div>

            {/* Footer */}
            <p className="text-center mt-6 text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-blue-500 hover:underline hover:text-lg transition-all"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
