import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import React from "react";
import { Badge } from "./ui/badge";

const AppliedJobTable = () => {
  return (
    <div className="overflow-x-auto bg-white shadow-2xl rounded-2xl p-6 mb-6">
      <Table>
        <TableCaption className="text-2xl font-bold text-gray-800 mb-6">
          Your Applied Jobs
        </TableCaption>

        <TableHeader>
          <TableRow className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-white shadow-xl rounded-tl-3xl rounded-tr-3xl hover:shadow-2xl transition-all ease-in-out duration-300">
            <TableHead className="px-6 py-4 text-lg font-semibold tracking-wide uppercase text-white">
              Date
            </TableHead>
            <TableHead className="px-6 py-4 text-lg font-semibold tracking-wide uppercase text-white">
              Job Role
            </TableHead>
            <TableHead className="px-6 py-4 text-lg font-semibold tracking-wide uppercase text-white">
              Company
            </TableHead>
            <TableHead className="px-6 py-4 text-lg font-semibold tracking-wide uppercase text-right text-white">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>

        {/* List of table */}
        <TableBody>
          {[1, 2, 3].map((item, index) => (
            <TableRow
              key={index}
              className={`${
                index % 2 === 0
                  ? "bg-gradient-to-r from-blue-50 to-indigo-50"
                  : "bg-gradient-to-r from-pink-50 to-red-50"
              } hover:bg-gradient-to-r hover:from-green-100 hover:to-teal-100 transition-all ease-in-out duration-300 rounded-lg shadow-md`}
            >
              <TableCell className="px-6 py-4 text-base font-medium text-gray-700">
                24-12-2024
              </TableCell>
              <TableCell className="px-6 py-4 text-base font-medium text-gray-700">
                Frontend Developer
              </TableCell>
              <TableCell className="px-6 py-4 text-base font-medium text-gray-700">
                F1 Soft
              </TableCell>
              <TableCell className="text-right px-6 py-4">
                <Badge className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-5 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all ease-in-out">
                  Selected
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
