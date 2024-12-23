// import { Search } from "lucide-react";
// import React from "react";
// import { Button } from "./ui/button";

// const HeroSection = () => {
//   return (
//     <div className="text-center bg-gradient-to-r from-[#6A38C2] to-[#F83002] p-10">
//       <div className="flex flex-col gap-5 my-5 max-w-4xl mx-auto">
//         {/* For Title */}
//         <span className="text-2xl mx-auto px-4 py-2 rounded-full bg-gray-100 font-bold uppercase tracking-wider italic bg-clip-text text-transparent bg-gradient-to-r from-[#4FACFE] to-[#00F2FE]">
//           No. 1 Job Hunt Website
//         </span>

//         {/* For Main Website Title */}
//         <h1 className="text-5xl md:text-6xl font-extrabold mt-4 text-white">
//           Search, Apply & <br /> Get Your
//           <span className="text-[#6A38C2]"> Dream Job</span>
//         </h1>
//         <p className="font-semibold text-white mt-3 text-lg md:text-xl max-w-2xl mx-auto">
//           Find the perfect job for you with ease. Explore opportunities with the
//           best companies.
//         </p>

//         {/* For Input tag to search jobs */}
//         <div className="flex w-full sm:w-[60%] md:w-[50%] lg:w-[40%] shadow-xl border border-gray-200 rounded-full items-center gap-4 mx-auto bg-white p-3 hover:shadow-2xl transition-shadow duration-300 ease-in-out mt-6">
//           <input
//             type="text"
//             placeholder="Find your dream jobs"
//             className="outline-none border-none w-full text-lg text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-[#6A38C2] rounded-full px-4 py-2 transition-all duration-300 ease-in-out"
//           />

//           {/* For button to search jobs with Logo */}
//           <Button className="rounded-full bg-[#6A38C2] text-white hover:bg-[#5a2b92] hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform">
//             <Search className="h-6 w-6" />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import { Search } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="text-center bg-gradient-to-r from-[#6A38C2] to-[#F83002] py-20">
      <div className="flex flex-col gap-5 my-5 max-w-4xl mx-auto">
        {/* For Title */}
        <span className="text-2xl mx-auto px-4 py-2 rounded-full bg-gray-100 font-bold uppercase tracking-wider italic bg-clip-text text-transparent bg-gradient-to-r from-[#4FACFE] to-[#00F2FE]">
          No. 1 Job Hunt Website
        </span>

        {/* For Main Website Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold mt-4 text-white">
          Search, Apply & <br /> Get Your
          <span className="text-[#6A38C2]"> Dream Job</span>
        </h1>
        <p className="font-semibold text-white mt-3 text-lg md:text-xl max-w-2xl mx-auto">
          Find the perfect job for you with ease. Explore opportunities with the
          best companies.
        </p>

        {/* For Input tag to search jobs */}
        <div className="flex w-full sm:w-[60%] md:w-[50%] lg:w-[80%] shadow-xl border border-gray-200 rounded-full items-center gap-4 mx-auto bg-white p-3 hover:shadow-2xl transition-shadow duration-300 ease-in-out mt-6">
          <input
            type="text"
            placeholder="Find your dream jobs"
            className="outline-none border-none w-full text-lg text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-[#6A38C2] rounded-full px-4 py-2 transition-all duration-300 ease-in-out"
          />

          {/* For button to search jobs with Logo */}
          <Button className="rounded-full bg-[#6A38C2] text-white hover:bg-[#5a2b92] hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform">
            <Search className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
