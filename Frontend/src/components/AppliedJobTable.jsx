// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "./ui/table";
// import { Badge } from "./ui/badge";
// import { useSelector } from "react-redux";

// const AppliedJobTable = () => {
//   const { allAppliedJobs } = useSelector((store) => store.job);
//   return (
//     <div>
//       <Table>
//         <TableCaption>A list of your applied jobs</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Date</TableHead>
//             <TableHead>Job Role</TableHead>
//             <TableHead>Company</TableHead>
//             <TableHead className="text-right">Status</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {allAppliedJobs.length <= 0 ? (
//             <span>You haven't applied any job yet.</span>
//           ) : (
//             allAppliedJobs.map((appliedJob) => (
//               <TableRow key={appliedJob._id}>
//                 <TableCell>{appliedJob?.createdAt?.split("T")[0]}</TableCell>
//                 <TableCell>{appliedJob.job?.title}</TableCell>
//                 <TableCell>{appliedJob.job?.company?.name}</TableCell>
//                 <TableCell className="text-right">
//                   <Badge
//                     className={`${
//                       appliedJob?.status === "rejected"
//                         ? "bg-red-400"
//                         : appliedJob.status === "pending"
//                         ? "bg-gray-400"
//                         : "bg-green-400"
//                     }`}
//                   >
//                     {appliedJob.status.toUpperCase()}
//                   </Badge>
//                 </TableCell>
//               </TableRow>
//             ))
//           )}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default AppliedJobTable;

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector((store) => store.job);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200 mt-10">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">My Applied Jobs</h1>
      <Table className="w-full border-collapse">
        <TableCaption className="text-gray-600">
          A list of your applied jobs
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="px-4 py-2 text-gray-700">Date</TableHead>
            <TableHead className="px-4 py-2 text-gray-700">Job Role</TableHead>
            <TableHead className="px-4 py-2 text-gray-700">Company</TableHead>
            <TableHead className="px-4 py-2 text-gray-700 text-right">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAppliedJobs.length <= 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-6 text-gray-500">
                You haven't applied to any job yet.
              </TableCell>
            </TableRow>
          ) : (
            allAppliedJobs.map((appliedJob) => (
              <TableRow
                key={appliedJob._id}
                className="hover:bg-gray-50 transition duration-200"
              >
                <TableCell className="px-4 py-2 text-gray-600">
                  {appliedJob?.createdAt?.split("T")[0]}
                </TableCell>
                <TableCell className="px-4 py-2 font-medium text-gray-800">
                  {appliedJob.job?.title}
                </TableCell>
                <TableCell className="px-4 py-2 text-gray-600">
                  {appliedJob.job?.company?.name}
                </TableCell>
                <TableCell className="px-4 py-2 text-right">
                  <Badge
                    className={`px-3 py-1 rounded-lg font-semibold text-sm ${
                      appliedJob?.status === "rejected"
                        ? "bg-red-100 text-red-700 border border-red-300"
                        : appliedJob.status === "pending"
                        ? "bg-yellow-100 text-yellow-700 border border-yellow-300"
                        : "bg-green-100 text-green-700 border border-green-300"
                    }`}
                  >
                    {appliedJob.status.toUpperCase()}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
