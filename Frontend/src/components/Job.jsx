// import React from "react";
// import { Button } from "./ui/button";
// import { Bookmark } from "lucide-react";
// import { Avatar, AvatarImage } from "./ui/avatar";
// import { Badge } from "./ui/badge";
// import { useNavigate } from "react-router-dom";

// const Job = ({ job }) => {
//   const navigate = useNavigate();

//   const daysAgoFunction = (mongodbTime) => {
//     const createdAt = new Date(mongodbTime);
//     const currentTime = new Date();
//     const timeDifference = currentTime - createdAt;
//     return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
//   };

//   return (
//     <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
//       <div className="flex items-center justify-between">
//         <p className="text-sm text-gray-500">
//           {daysAgoFunction(job?.createdAt) === 0
//             ? "Today"
//             : `${daysAgoFunction(job?.createdAt)} days ago`}
//         </p>
//         <Button variant="outline" className="rounded-full" size="icon">
//           <Bookmark />
//         </Button>
//       </div>

//       <div className="flex items-center gap-2 my-2">
//         <Button className="p-6" variant="outline" size="icon">
//           <Avatar>
//             <AvatarImage src={job?.company?.logo} />
//           </Avatar>
//         </Button>
//         <div>
//           <h1 className="font-medium text-lg">{job?.company?.name}</h1>
//           <p className="text-sm text-gray-500">India</p>
//         </div>
//       </div>

//       <div>
//         <h1 className="font-bold text-lg my-2">{job?.title}</h1>
//         <p className="text-sm text-gray-600">{job?.description}</p>
//       </div>
//       <div className="flex items-center gap-2 mt-4">
//         <Badge className={"text-blue-700 font-bold"} variant="ghost">
//           {job?.position} Positions
//         </Badge>
//         <Badge className={"text-[#F83002] font-bold"} variant="ghost">
//           {job?.jobType}
//         </Badge>
//         <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
//           {job?.salary}LPA
//         </Badge>
//       </div>
//       <div className="flex items-center gap-4 mt-4">
//         <Button
//           onClick={() => navigate(`/description/${job?._id}`)}
//           variant="outline"
//         >
//           Details
//         </Button>
//         <Button className="bg-[#7209b7]">Save For Later</Button>
//       </div>
//     </div>
//   );
// };

// export default Job;

import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  return (
    <div className="p-6 rounded-lg shadow-md bg-gradient-to-r from-gray-50 via-white to-gray-100 border border-gray-200 transition-shadow hover:shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-500">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
        <Button
          variant="outline"
          className="rounded-full hover:bg-gray-100 focus:ring-2 focus:ring-gray-300"
          size="icon"
        >
          <Bookmark className="text-gray-600" />
        </Button>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <Avatar className="border border-gray-200 shadow-sm">
          <AvatarImage
            src={job?.company?.logo}
            alt={`${job?.company?.name} logo`}
          />
        </Avatar>
        <div>
          <h1 className="font-semibold text-lg text-gray-800">
            {job?.company?.name}
          </h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-xl text-gray-900 mb-2">{job?.title}</h1>
        <p className="text-sm text-gray-600 line-clamp-3">{job?.description}</p>
      </div>

      <div className="flex items-center gap-2 mt-4 flex-wrap">
        <Badge className="text-blue-700 font-semibold bg-blue-50 border border-blue-200 hover:bg-blue-100">
          {job?.position} Positions
        </Badge>
        <Badge className="text-red-700 font-semibold bg-red-50 border border-red-200 hover:bg-red-100">
          {job?.jobType}
        </Badge>
        <Badge className="text-purple-700 font-semibold bg-purple-50 border border-purple-200 hover:bg-purple-100">
          {job?.salary} LPA
        </Badge>
      </div>

      <div className="flex items-center gap-4 mt-6">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
          className="text-gray-800 border-gray-300 hover:border-gray-400 hover:bg-gray-50 focus:ring-2 focus:ring-gray-300"
        >
          Details
        </Button>
        <Button className="bg-purple-700 text-white font-semibold hover:bg-purple-800 focus:ring-2 focus:ring-purple-500">
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job;
