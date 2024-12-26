import React, { useEffect, useState } from "react";
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
import { setLoading, setUser } from "../../redux/authSlice";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const { loading, user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
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

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-600">
      <Navbar />
      <div className="flex flex-1 items-center justify-center">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-lg bg-white shadow-xl rounded-3xl p-8 space-y-8 border border-gray-300 transform hover:scale-105 transition-all duration-300 ease-in-out"
          style={{
            height: "650px",
            background: "linear-gradient(to bottom, #ffffff, #f7faff)",
          }}
        >
          {/* Heading */}
          <h1 className="text-5xl font-extrabold text-gray-800 text-center animate__animated animate__fadeIn animate__delay-1s">
            Welcome Back!
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 text-center tracking-wide animate__animated animate__fadeIn animate__delay-1.5s">
            Sign in to access your account
          </p>

          {/* Inputs */}
          <div className="space-y-6">
            {/* Email Input */}
            <div>
              <Label className="block text-2xl font-bold text-center text-indigo-700 tracking-wider mb-3">
                Email Address
              </Label>
              <Input
                type="email"
                value={input.email}
                name="email"
                onChange={changeEventHandler}
                placeholder="Enter your email"
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-md focus:border-indigo-600 focus:ring-indigo-600 text-lg px-4 py-3 mb-4 transition-all duration-300 ease-in-out"
              />
            </div>

            {/* Password Input */}
            <div>
              <Label className="block text-2xl font-bold text-center text-purple-700 tracking-wider mb-3">
                Password
              </Label>
              <Input
                type="password"
                value={input.password}
                name="password"
                onChange={changeEventHandler}
                placeholder="Enter your password"
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-md focus:border-purple-600 focus:ring-purple-600 text-lg px-4 py-3 mb-4 transition-all duration-300 ease-in-out"
              />
            </div>
          </div>

          {/* Role Selection */}
          <div className="mt-6">
            <RadioGroup className="flex justify-around">
              {/* Student Role */}
              <div className="flex items-center space-x-3">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="h-5 w-5 border-gray-400 text-indigo-600 focus:ring-indigo-600 transition-all duration-300"
                />
                <Label className="text-lg font-semibold text-gray-800">
                  Student
                </Label>
              </div>

              {/* Recruiter Role */}
              <div className="flex items-center space-x-3">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="h-5 w-5 border-gray-400 text-purple-600 focus:ring-purple-600 transition-all duration-300"
                />
                <Label className="text-lg font-semibold text-gray-800">
                  Recruiter
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Submit Button */}
          <div>
            {loading ? (
              <Button
                disabled
                className="w-full flex items-center justify-center py-4 px-6 rounded-lg bg-indigo-400 text-white shadow-md hover:bg-indigo-500 transition-all duration-300 ease-in-out"
              >
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Signing In...
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-lg hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 ease-in-out text-2xl"
              >
                Login
              </Button>
            )}
          </div>

          {/* Sign-up Link */}
          <p className="text-center text-lg text-gray-700">
            Do not have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-indigo-600 hover:text-indigo-800 transition-all duration-200 ease-in-out"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
