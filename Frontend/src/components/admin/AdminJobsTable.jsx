import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, Eye, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminJobsTable = () => {
  const { allAdminJobs, searchJobByText } = useSelector((store) => store.job);

  const [filterJobs, setFilterJobs] = useState(allAdminJobs);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredJobs = allAdminJobs.filter((job) => {
      if (!searchJobByText) {
        return true;
      }
      return (
        job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
        job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase())
      );
    });
    setFilterJobs(filteredJobs);
  }, [allAdminJobs, searchJobByText]);

  return (
    <div className="overflow-x-auto bg-gray-100 p-8 rounded-lg shadow-xl">
      <Table className="text-gray-800">
        <TableCaption className="text-xl font-semibold text-center text-gray-700">
          Recent Job Posts and Applications
        </TableCaption>
        <TableHeader>
          <TableRow className="text-xl text-black bg-purple-500">
            <TableHead className="py-3 px-6 text-black">Company Name</TableHead>
            <TableHead className="py-3 px-6 text-black">Role</TableHead>
            <TableHead className="py-3 px-6 text-black">Date</TableHead>
            <TableHead className="text-right py-3 px-6 text-black">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterJobs?.map((job) => (
            <TableRow
              key={job._id}
              className="transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500 hover:text-white"
            >
              <TableCell className="py-4 px-6 text-sm">
                {job?.company?.name}
              </TableCell>
              <TableCell className="py-4 px-6 text-sm">{job?.title}</TableCell>
              <TableCell className="py-4 px-6 text-sm">
                {job?.createdAt.split("T")[0]}
              </TableCell>
              <TableCell className="text-right py-4 px-6">
                <Popover>
                  <PopoverTrigger className="text-gray-600 hover:text-teal-500 cursor-pointer transition-all duration-300">
                    <MoreHorizontal className="w-5 h-5" />
                  </PopoverTrigger>
                  <PopoverContent className="w-36 bg-white border border-gray-300 shadow-xl rounded-lg transition-transform transform hover:scale-105">
                    <div
                      onClick={() => navigate(`/admin/companies/${job._id}`)}
                      className="flex items-center gap-2 p-2 cursor-pointer hover:bg-teal-100 rounded-md transition-all duration-300"
                    >
                      <Edit2 className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-700">Edit</span>
                    </div>
                    <div
                      onClick={() =>
                        navigate(`/admin/jobs/${job._id}/applicants`)
                      }
                      className="flex items-center gap-2 p-2 cursor-pointer mt-2 hover:bg-teal-100 rounded-md transition-all duration-300"
                    >
                      <Eye className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-700">Applicants</span>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsTable;
