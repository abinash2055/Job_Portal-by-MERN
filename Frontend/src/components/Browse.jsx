import React from "react";
import Navbar from "./shared/Navbar";

// Array of random jobs
const randomJobs = [1, 2, 3, 4, 5];
const Browse = () => {
  return (
    <div>
      <Navbar />
      {/* TO SEARCH RESULTS  */}
      {/* shows length of array of randomJobs  */}
      <div>Search Results ({randomJobs.length})</div>
    </div>
  );
};

export default Browse;
