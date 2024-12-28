import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "../hooks/useGetAppliedJobs";

const isResume = true;

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8 shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24 border-4 border-indigo-500">
              <AvatarImage
                src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                alt="profile"
              />
            </Avatar>
            <div>
              <h1 className="font-semibold text-2xl text-gray-800 transition-colors duration-300 hover:text-indigo-600">
                {user?.fullname}
              </h1>
              <p className="text-gray-600 text-sm">{user?.profile?.bio}</p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-right text-indigo-600 hover:bg-indigo-100 p-2 rounded-full transition duration-200 ease-in-out"
            variant="outline"
          >
            <Pen size={20} />
          </Button>
        </div>
        <div className="my-5 space-y-4">
          <div className="flex items-center gap-3 text-gray-700">
            <Mail size={20} />
            <span className="text-lg">{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Contact size={20} />
            <span className="text-lg">{user?.phoneNumber}</span>
          </div>
        </div>
        <div className="my-5">
          <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            {user?.profile?.skills.length !== 0 ? (
              user?.profile?.skills.map((item, index) => (
                <Badge
                  key={index}
                  className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition duration-200 ease-in-out"
                >
                  {item}
                </Badge>
              ))
            ) : (
              <span className="text-gray-500">No skills listed</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold text-gray-700">Resume</Label>
          {isResume ? (
            <a
              target="_blank"
              href={user?.profile?.resume}
              className="text-indigo-500 hover:underline cursor-pointer transition duration-200 ease-in-out"
            >
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span className="text-gray-500">No resume uploaded</span>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl mt-6 shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
        <h1 className="font-bold text-xl text-gray-800 my-5">Applied Jobs</h1>
        {/* Applied Job Table */}
        <AppliedJobTable />
      </div>

      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
