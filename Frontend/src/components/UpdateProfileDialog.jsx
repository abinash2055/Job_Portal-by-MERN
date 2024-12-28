import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import { setUser } from "../redux/authSlice";
import { toast } from "sonner";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills?.map((skill) => skill) || "",
    file: user?.profile?.resume || "",
  });
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
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
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="sm:max-w-[500px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl shadow-2xl p-8 transform transition-all duration-700 ease-in-out scale-105"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-white">
              Update Profile
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <div className="grid gap-6 py-6">
              {[
                { label: "Name", id: "name", value: input.fullname },
                { label: "Email", id: "email", value: input.email },
                { label: "Number", id: "number", value: input.phoneNumber },
                { label: "Bio", id: "bio", value: input.bio },
                { label: "Skills", id: "skills", value: input.skills },
              ].map(({ label, id, value }) => (
                <div key={id} className="grid grid-cols-4 items-center gap-4">
                  <Label
                    htmlFor={id}
                    className="text-right text-white font-medium"
                  >
                    {label}
                  </Label>
                  <Input
                    id={id}
                    name={id}
                    value={value}
                    onChange={changeEventHandler}
                    className="col-span-3 rounded-md bg-white text-gray-700 p-3 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label
                  htmlFor="file"
                  className="text-right text-white font-medium"
                >
                  Resume
                </Label>
                <Input
                  id="file"
                  name="file"
                  type="file"
                  accept="application/pdf"
                  onChange={fileChangeHandler}
                  className="col-span-3 text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400 rounded-md file:px-4 file:py-2 file:bg-indigo-600 file:text-white"
                />
              </div>
            </div>
            <DialogFooter>
              {loading ? (
                <Button
                  disabled
                  className="w-full bg-gray-400 text-gray-700 py-3 rounded-md flex items-center justify-center space-x-2"
                >
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Updating...</span>
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 py-3 rounded-md transition duration-200 ease-in-out transform hover:scale-105"
                >
                  Update Profile
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfileDialog;

// Done styles
