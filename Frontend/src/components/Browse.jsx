// import React, { useEffect } from "react";
// import Navbar from "./shared/Navbar";
// import Job from "./Job";
// import { useDispatch, useSelector } from "react-redux";
// import { setSearchedQuery } from "../redux/jobSlice";
// import useGetAllJobs from "../hooks/useGetAllJobs";

// const Browse = () => {
//   useGetAllJobs();
//   const { allJobs } = useSelector((store) => store.job);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     return () => {
//       dispatch(setSearchedQuery(""));
//     };
//   }, []);
//   return (
//     <div>
//       <Navbar />
//       <div className="max-w-7xl mx-auto my-10">
//         <h1 className="font-bold text-xl my-10">
//           Search Results ({allJobs.length})
//         </h1>
//         <div className="grid grid-cols-3 gap-4">
//           {allJobs.map((job) => {
//             return <Job key={job._id} job={job} />;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Browse;

import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "../redux/jobSlice";
import useGetAllJobs from "../hooks/useGetAllJobs";

const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="font-bold text-2xl text-gray-800 my-10">
          Search Results ({allJobs.length})
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allJobs.map((job) => {
            return (
              <Job
                key={job._id}
                job={job}
                className="shadow-lg rounded-lg bg-white p-4 hover:shadow-xl transition-shadow duration-300"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
