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
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CompaniesTable = () => {
  const { companies, searchCompanyByText } = useSelector(
    (store) => store.company
  );
  const [filterCompany, setFilterCompany] = useState(companies);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredCompany =
      companies.length >= 0 &&
      companies.filter((company) => {
        if (!searchCompanyByText) {
          return true;
        }
        return company?.name
          ?.toLowerCase()
          .includes(searchCompanyByText.toLowerCase());
      });
    setFilterCompany(filteredCompany);
  }, [companies, searchCompanyByText]);

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Registered Companies
      </h2>
      <Table className="border border-gray-200 shadow-lg rounded-lg overflow-hidden bg-white">
        <TableCaption className="text-gray-900 text-lg italic">
          A list of your recent registered companies
        </TableCaption>
        <TableHeader className="">
          <TableRow className="bg-gradient-to-r from-blue-500 to-indigo-500 text-black">
            <TableHead className="py-3 px-4 font-medium text-black">
              Logo
            </TableHead>
            <TableHead className="py-3 px-4 font-medium text-black">
              Name
            </TableHead>
            <TableHead className="py-3 px-4 font-medium text-black">
              Date
            </TableHead>
            <TableHead className="py-3 px-4 text-right font-medium text-black">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterCompany?.map((company, index) => (
            <TableRow
              key={company._id}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:shadow-md hover:bg-blue-100 transition-transform transform hover:scale-[1.02]`}
            >
              <TableCell className="py-4 px-4">
                <Avatar className="shadow-md">
                  <AvatarImage
                    src={company.logo}
                    alt={company.name}
                    className="rounded-full"
                  />
                </Avatar>
              </TableCell>
              <TableCell className="py-4 px-4 font-semibold text-gray-800">
                {company.name}
              </TableCell>
              <TableCell className="py-4 px-4 text-gray-600">
                {company.createdAt.split("T")[0]}
              </TableCell>
              <TableCell className="py-4 px-4 text-right">
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal className="w-6 h-6 text-gray-600 hover:text-indigo-600 cursor-pointer transition-all" />
                  </PopoverTrigger>
                  <PopoverContent className="w-44 bg-white border border-gray-200 shadow-xl rounded-lg p-3 transition-all duration-200">
                    <div
                      onClick={() =>
                        navigate(`/admin/companies/${company._id}`)
                      }
                      className="flex items-center gap-3 px-3 py-2 hover:bg-indigo-50 rounded-md cursor-pointer transition-all"
                    >
                      <Edit2 className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-800 font-medium">Edit</span>
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

export default CompaniesTable;
