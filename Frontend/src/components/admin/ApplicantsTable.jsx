// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../ui/table";
// import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
// import { MoreHorizontal } from "lucide-react";
// import { useSelector } from "react-redux";
// import { toast } from "sonner";
// import { APPLICATION_API_END_POINT } from "../../utils/constant";
// import axios from "axios";

// const shortlistingStatus = ["Accepted", "Rejected"];

// const ApplicantsTable = () => {
//   const { applicants } = useSelector((store) => store.application);

//   const statusHandler = async (status, id) => {
//     console.log("called");
//     try {
//       axios.defaults.withCredentials = true;
//       const res = await axios.post(
//         `${APPLICATION_API_END_POINT}/status/${id}/update`,
//         { status }
//       );
//       console.log(res);
//       if (res.data.success) {
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   return (
//     <div>
//       <Table>
//         <TableCaption>A list of your recent applied user</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>FullName</TableHead>
//             <TableHead>Email</TableHead>
//             <TableHead>Contact</TableHead>
//             <TableHead>Resume</TableHead>
//             <TableHead>Date</TableHead>
//             <TableHead className="text-right">Action</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {applicants &&
//             applicants?.applications?.map((item) => (
//               <tr key={item._id}>
//                 <TableCell>{item?.applicant?.fullname}</TableCell>
//                 <TableCell>{item?.applicant?.email}</TableCell>
//                 <TableCell>{item?.applicant?.phoneNumber}</TableCell>
//                 <TableCell>
//                   {item.applicant?.profile?.resume ? (
//                     <a
//                       className="text-blue-600 cursor-pointer"
//                       href={item?.applicant?.profile?.resume}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       {item?.applicant?.profile?.resumeOriginalName}
//                     </a>
//                   ) : (
//                     <span>NA</span>
//                   )}
//                 </TableCell>
//                 <TableCell>{item?.applicant.createdAt.split("T")[0]}</TableCell>
//                 <TableCell className="float-right cursor-pointer">
//                   <Popover>
//                     <PopoverTrigger>
//                       <MoreHorizontal />
//                     </PopoverTrigger>
//                     <PopoverContent className="w-32">
//                       {shortlistingStatus.map((status, index) => {
//                         return (
//                           <div
//                             onClick={() => statusHandler(status, item?._id)}
//                             key={index}
//                             className="flex w-fit items-center my-2 cursor-pointer"
//                           >
//                             <span>{status}</span>
//                           </div>
//                         );
//                       })}
//                     </PopoverContent>
//                   </Popover>
//                 </TableCell>
//               </tr>
//             ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default ApplicantsTable;

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { APPLICATION_API_END_POINT } from "../../utils/constant";
import axios from "axios";

const shortlistingStatus = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
  const { applicants } = useSelector((store) => store.application);

  const statusHandler = async (status, id) => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post(
        `${APPLICATION_API_END_POINT}/status/${id}/update`,
        { status }
      );
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="overflow-x-auto bg-gray-50 p-6 rounded-lg shadow-lg">
      <Table className="min-w-full">
        <TableCaption className="text-2xl font-semibold text-center text-indigo-700">
          Recent Job Applicants
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-indigo-100 text-indigo-800 text-xl">
            <TableHead className="py-3 px-6">FullName</TableHead>
            <TableHead className="py-3 px-6">Email</TableHead>
            <TableHead className="py-3 px-6">Contact</TableHead>
            <TableHead className="py-3 px-6">Resume</TableHead>
            <TableHead className="py-3 px-6">Date</TableHead>
            <TableHead className="text-right py-3 px-6">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicants?.applications?.map((item) => (
            <TableRow
              key={item._id}
              className="transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-teal-200 hover:to-indigo-200 hover:shadow-lg"
            >
              <TableCell className="py-4 px-6 text-sm">
                {item?.applicant?.fullname}
              </TableCell>
              <TableCell className="py-4 px-6 text-sm">
                {item?.applicant?.email}
              </TableCell>
              <TableCell className="py-4 px-6 text-sm">
                {item?.applicant?.phoneNumber}
              </TableCell>
              <TableCell className="py-4 px-6 text-sm">
                {item.applicant?.profile?.resume ? (
                  <a
                    className="text-blue-600 hover:text-blue-800 cursor-pointer"
                    href={item?.applicant?.profile?.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item?.applicant?.profile?.resumeOriginalName}
                  </a>
                ) : (
                  <span className="text-gray-500">NA</span>
                )}
              </TableCell>
              <TableCell className="py-4 px-6 text-sm">
                {item?.applicant.createdAt.split("T")[0]}
              </TableCell>
              <TableCell className="text-right py-4 px-6">
                <Popover>
                  <PopoverTrigger className="text-indigo-600 hover:text-indigo-800 cursor-pointer">
                    <MoreHorizontal className="w-5 h-5" />
                  </PopoverTrigger>
                  <PopoverContent className="w-40 bg-white border border-gray-300 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                    {shortlistingStatus.map((status, index) => (
                      <div
                        onClick={() => statusHandler(status, item?._id)}
                        key={index}
                        className="flex items-center gap-2 p-2 my-2 cursor-pointer hover:bg-teal-100 rounded-md transition-all duration-300"
                      >
                        <span
                          className={`text-sm ${
                            status === "Accepted"
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {status}
                        </span>
                      </div>
                    ))}
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

export default ApplicantsTable;
