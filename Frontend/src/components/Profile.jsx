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

// Array of Skills
// const skills = ["HTML", "CSS", "JS/TS", "REACT"];
const isResume = true;

const Profile = () => {
  // For Update of data
  const [open, setOpen] = useState(false);

  // To get user from database
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="min-h-screen bg-gradient-to-br 0 from-teal-400 via-pink-500 to-purple-600 h-[130vh]">
      {/* Navbar */}
      <Navbar />

      {/* Profile Card */}
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl border border-gray-200 my-10 p-8 transition-all transform hover:scale-105 min-h-[100vh]">
        <div className="flex justify-between items-center mb-6">
          {/* Avatar and Details */}
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24 shadow-xl rounded-full border-4 border-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <AvatarImage
                src="https://img.freepik.com/premium-vector/minimalist-type-creative-business-logo-template_1283348-23026.jpg?semt=ais_hybrid"
                alt="profile"
              />
            </Avatar>

            <div>
              <h1 className="font-extrabold text-3xl text-gray-800 mb-3">
                {user?.fullname}
              </h1>
              <p className="text-gray-700 text-lg mt-2 leading-relaxed max-w-md">
                {user?.profile?.bio}
              </p>
            </div>
          </div>

          {/* Edit Button */}
          <Button
            variant="outline"
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 bg-gray-50 hover:bg-gray-200 text-gray-700 shadow-lg hover:shadow-xl transition-all"
          >
            <Pen className="w-4 h-4" />
            Edit Profile
          </Button>
        </div>

        {/* Contact Details */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-4 text-gray-700">
            <Mail className="w-5 h-5 text-blue-600" />
            <span className="text-base">{user?.email}</span>
          </div>
          <div className="flex items-center gap-4 text-gray-700">
            <Contact className="w-5 h-5 text-green-600" />
            <span className="text-base">{user?.phoneNumer}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-8">
          <h2 className="font-semibold text-xl text-gray-800 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3 mt-4">
            {user?.profile?.skills?.length ? (
              user?.profile?.skills.map((item, index) => (
                <Badge
                  key={index}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-all"
                >
                  {item}
                </Badge>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No skills listed.</p>
            )}
          </div>
        </div>

        {/* For Resume */}
        <div className="mt-8 flex flex-col items-start">
          <Label className="text-md font-semibold">Resume</Label>
          {isResume ? (
            <a
              target="blank"
              className="text-blue-600 hover:text-blue-800 font-semibold mt-2 underline"
              // href="https://www.youtube.com/@abinashnathpandey9466"
              href={user?.profile?.resume}
            >
              View Resume: {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span className="text-gray-500">No resume uploaded.</span>
          )}
        </div>

        {/* Applied Jobs */}
        <div className="mt-12 bg-gray-50 p-6 rounded-xl shadow-2xl">
          <h1 className="font-semibold text-xl text-gray-800 mb-4">
            Applied Jobs
          </h1>

          {/* Application Job Table */}
          <AppliedJobTable />
        </div>
      </div>

      {/* form diagloue to edit profile  */}
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
