import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant";
import { toast } from "sonner";
import { Button } from "../ui/button";
import Navbar from "../shared/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/authSlice";
import { Loader2 } from "lucide-react";
// import { useGoogleLogin } from "@react-oauth/google";
// import { useFacebookLogin } from "@react-oauth/google";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const { loading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Ensure all input fields are populated
    if (
      !input.fullname ||
      !input.email ||
      !input.phoneNumber ||
      !input.password ||
      !input.role
    ) {
      toast.error("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);

    // Only append file if it's present
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      dispatch(setLoading(true));
      // Post the form data to the server
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Ensure content type is set for file upload
        },
        withCredentials: true, // Include credentials (cookies, etc.)
      });

      if (res?.data?.success) {
        toast.success(res.data.message); // Success message
        navigate("/login"); // Redirect to login page
      } else {
        toast.error(
          res.data.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Error during API call:", error);

      // Handle different error scenarios
      if (error.response) {
        toast.error(error.response.data.message || "API error occurred.");
      } else if (error.request) {
        toast.error(
          "No response from the server. Please check your connection."
        );
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto h-full py-10">
        <form
          onSubmit={submitHandler}
          className="w-full md:w-1/2 bg-white shadow-lg rounded-xl p-8 space-y-6 transform transition-all hover:scale-105 hover:shadow-2xl duration-300"
        >
          <h1 className="text-4xl font-semibold text-center text-gray-800 mb-4">
            Create Your Account
          </h1>

          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-lg font-bold text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-lg font-bold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-lg font-bold text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={changeEventHandler}
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-lg font-bold text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="Create a strong password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
            />
          </div>

          {/* Role Selection */}
          <div className="mb-5">
            <label className="block text-lg font-bold text-gray-700">
              Select Your Role
            </label>
            <div className="flex space-x-6 mt-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="focus:ring-purple-600"
                />
                <label className="ml-2 font-bold text-gray-700 italic">
                  Student
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="focus:ring-purple-600"
                />
                <label className="ml-2 text-gray-700 font-bold italic">
                  Recruiter
                </label>
              </div>
            </div>
          </div>

          {/* Profile Photo Upload */}
          <div className="mb-5">
            <label className="block text-lg font-semibold text-gray-700">
              Upload Profile Photo
            </label>
            <div className="mt-2 flex justify-center items-center w-full h-40 border-4 border-dashed border-gray-300 rounded-lg group hover:border-purple-600 transition-all">
              <label
                htmlFor="file-upload"
                className="cursor-pointer w-full h-full flex flex-col justify-center items-center space-y-3 text-gray-600 group-hover:text-purple-600 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-gray-400 group-hover:text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 7V3a1 1 0 011-1h8a1 1 0 011 1v4m-9 4h10M13 14v7a1 1 0 001 1h2a1 1 0 001-1v-7a1 1 0 00-1-1h-2a1 1 0 00-1 1z"
                  />
                </svg>
                <span className="text-xl font-medium">Click to Upload</span>
                <span className="text-sm text-gray-500">
                  JPG, PNG, GIF (Max: 5MB)
                </span>
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={changeFileHandler}
                className="hidden"
              />
            </div>
          </div>

          {/* Submit Button */}
          {loading ? (
            <Button className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please Wait a moment...
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white font-semibold text-lg rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-700 transition duration-200"
            >
              Register Now
            </Button>
          )}

          {/* Divider */}
          {/* <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div> */}

          {/* Social Login */}
          {/* <div className="grid grid-cols-2 gap-4">
            <Button className="flex items-center justify-center bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition text-lg ">
              <i className="fab fa-google mr-2"></i> Google
            </Button>
            <Button className="flex items-center justify-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-lg">
              <i className="fab fa-facebook-f mr-2"></i> Facebook
            </Button>
          </div> */}

          {/* Redirect to Login */}
          <p className=" text-center mt-4">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-purple-600 font-medium hover:underline hover:text-lg transition-all"
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
