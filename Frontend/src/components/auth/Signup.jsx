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
// import { toast } from "./components/ui/sonner.jsx";

const Signup = () => {
  // To get All data
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  // To navigate into other page
  const navigate = useNavigate();

  // For storage of all data except file
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // For storage of file data
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  // To submit all the data
  const submitHandler = async (e) => {
    e.preventDefault();

    // Creating FormData
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);

    // Adding file if present
    if (input.file) {
      formData.append("file", input.file);
    }

    // API Call
    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      // Debugging API response
      console.log("API Response:", res);

      if (res?.data?.success) {
        navigate("/login");
        toast.success(res.data.message);
      } else {
        console.error("Unexpected API response:", res);
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error during API call:", error);

      if (error.response) {
        toast.error(error.response.data.message || "API error occurred.");
      } else if (error.request) {
        toast.error(
          "No response from the server. Please check your connection."
        );
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>

          {/* Full Name */}
          <div className="my-2">
            <Label>Full Name</Label>
            <Input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="Full Name"
            />
          </div>

          {/* Email */}
          <div className="my-2">
            <Label>Email ID</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="Email ID"
            />
          </div>

          {/* Phone Number */}
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input
              type="text"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              placeholder="Calling Number"
            />
          </div>

          {/* Password */}
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Password"
            />
          </div>

          {/* Role Selection */}
          <div className="flex items-center justify-between">
            {/* Student Role */}
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label>Student</Label>
              </div>

              {/* Recruiter Role */}
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label>Recruiter</Label>
              </div>
            </RadioGroup>

            {/* Profile Photo Upload */}
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input
                accept="image/*"
                type="file"
                onChange={changeFileHandler}
                className="cursor-pointer"
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full my-4">
            Sign Up
          </Button>
          <span className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
