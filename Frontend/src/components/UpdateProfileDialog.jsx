import React, { useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { USER_API_END_POINT } from "../utils/constant";
import { toast } from "react-toastify";

// To update user profile
const UpdateProfileDialog = ({ open, setOpen }) => {
  const dispatch = useDispatch(); // Move this inside the component

  const [loading, setLoading] = useState(false);

  // To get user data from store
  const { user } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills || [],
    file: user?.profile?.resume || "",
  });

  // Handle input changes
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber); // Fixed typo 'phoneNumer'
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);

    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${USER_API_END_POINT}/profile/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        // Ensure the dispatch action is correct
        dispatch({ type: "SET_USER", payload: res.data.user });
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Error updating profile");
    } finally {
      setLoading(false);
    }
    setOpen(false);
  };

  // Handle file change
  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file: file });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="sm:max-w-[450px] bg-white rounded-2xl shadow-2xl p-8"
        onInteractOutside={() => setOpen(false)}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-extrabold text-indigo-600 text-center mb-4">
            Update Your Profile
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={submitHandler}>
          <div className="grid gap-6">
            {/* Name */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="name"
                className="text-right text-gray-700 font-semibold"
              >
                Name
              </Label>
              <Input
                id="name"
                name="fullname"
                type="text"
                value={input.fullname}
                onChange={changeEventHandler}
                className="col-span-3 bg-gray-100 border-2 border-indigo-300 rounded-xl p-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Email */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="email"
                className="text-right text-gray-700 font-semibold"
              >
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={input.email}
                onChange={changeEventHandler}
                className="col-span-3 bg-gray-100 border-2 border-blue-300 rounded-xl p-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Phone number */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="number"
                className="text-right text-gray-700 font-semibold"
              >
                Number
              </Label>
              <Input
                id="number"
                name="phoneNumber"
                type="tel"
                value={input.phoneNumber}
                onChange={changeEventHandler}
                className="col-span-3 bg-gray-100 border-2 border-green-300 rounded-xl p-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Bio */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="bio"
                className="text-right text-gray-700 font-semibold"
              >
                Bio
              </Label>
              <Input
                id="bio"
                name="bio"
                type="text"
                value={input.bio}
                onChange={changeEventHandler}
                className="col-span-3 bg-gray-100 border-2 border-yellow-300 rounded-xl p-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Skills */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="skills"
                className="text-right text-gray-700 font-semibold"
              >
                Skills
              </Label>
              <Input
                id="skills"
                name="skills"
                type="text"
                value={input.skills.join(", ")}
                onChange={(e) =>
                  setInput({ ...input, skills: e.target.value.split(", ") })
                }
                className="col-span-3 bg-gray-100 border-2 border-pink-300 rounded-xl p-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Resume */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label
                htmlFor="file"
                className="text-right text-gray-700 font-semibold"
              >
                Resume
              </Label>
              <Input
                id="file"
                name="file"
                type="file"
                onChange={fileChangeHandler}
                accept="application/pdf"
                className="col-span-3 bg-gray-100 border-2 border-teal-300 rounded-xl p-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              type="submit"
              className={`w-full my-4 py-3 text-white font-semibold rounded-xl transition-all ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 transform duration-300"
              }`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please Wait
                </>
              ) : (
                "Update"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProfileDialog;
