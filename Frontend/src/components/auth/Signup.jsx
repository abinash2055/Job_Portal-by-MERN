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
import { setLoading } from "../../redux/authSlice";
import { Loader2 } from "lucide-react";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });
  const { loading, user } = useSelector((store) => store.auth);
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
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
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
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 via-blue-600 to-purple-700">
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-lg bg-white p-6 rounded-lg shadow-xl my-10 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(0,0,0,0.2))",
          }}
        >
          <h1 className="font-extrabold text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 mb-6">
            Sign Up
          </h1>
          <div className="my-4">
            <Label className="text-2xl font-semibold text-gray-800 tracking-wide">
              Full Name
            </Label>
            <Input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="Enter your full name"
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-lg focus:ring-2 focus:ring-indigo-500 px-4 py-3 transition-all duration-300"
            />
          </div>
          <div className="my-4">
            <Label className="text-2xl font-semibold text-gray-800 tracking-wide">
              Email
            </Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="Enter your email"
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-lg focus:ring-2 focus:ring-indigo-500 px-4 py-3 transition-all duration-300"
            />
          </div>
          <div className="my-4">
            <Label className="text-2xl font-semibold text-gray-800 tracking-wide">
              Phone Number
            </Label>
            <Input
              type="text"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              placeholder="Enter your phone number"
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-lg focus:ring-2 focus:ring-indigo-500 px-4 py-3 transition-all duration-300"
            />
          </div>
          <div className="my-4">
            <Label className="text-2xl font-semibold text-gray-800 tracking-wide">
              Password
            </Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Enter your password"
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-lg focus:ring-2 focus:ring-indigo-500 px-4 py-3 transition-all duration-300"
            />
          </div>
          <div className="my-5">
            <RadioGroup className="flex items-center gap-6 justify-center">
              <div className="flex items-center space-x-3">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label className="text-xl font-medium text-gray-800">
                  Student
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label className="text-xl font-medium text-gray-800">
                  Recruiter
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex items-center gap-2 my-5">
            <Label className="text-2xl">Profile Picture</Label>
            <Input
              accept="image/*"
              type="file"
              onChange={changeFileHandler}
              className="cursor-pointer"
            />
          </div>
          {loading ? (
            <Button className="w-full py-3 mt-6 text-xl font-semibold text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-lg hover:scale-105 hover:bg-gradient-to-l">
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Please Wait...
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full py-3 mt-6 text-xl font-semibold text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-lg hover:scale-105 hover:bg-gradient-to-l"
            >
              Sign Up
            </Button>
          )}
          <p className="text-center text-xl mt-4 text-black">
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-xl text-black">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

// Done Styles
