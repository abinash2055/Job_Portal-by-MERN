import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "../../redux/companySlice";

// Example API endpoint
const COMPANY_API_END_POINT = "http://localhost:8000/api/v1/company";

const CompanyCreate = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const dispatch = useDispatch();

  const registerNewCompany = async () => {
    try {
      const res = await axios.post(
        `${COMPANY_API_END_POINT}/register`,
        { companyName },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res?.data?.success) {
        dispatch(setSingleCompany(res.data.company));
        toast.success(res.data.message);
        const companyId = res?.data?.company?._id;
        navigate(`/admin/companies/${companyId}`);
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while registering the company.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-teal-50 via-blue-50 to-indigo-100 min-h-screen font-sans">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-purple-500 to-indigo-500 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-white tracking-wide">
            🏢 Admin Panel
          </h1>
          <button
            className="text-white hover:text-indigo-200 font-semibold transition-transform transform hover:scale-105"
            onClick={() => navigate("/")}
          >
            Home
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-8">
        <div className="my-10 text-center">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent animate-bounce">
            Create Your Company
          </h1>
          <p className="text-gray-700 mt-4 text-lg">
            Give your company a unique name. You can always change it later!
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8 transition-transform transform hover:scale-105">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border-2 border-indigo-200 rounded-lg focus:ring-4 focus:ring-indigo-400 focus:outline-none text-gray-800 placeholder-gray-400 transition-all duration-300"
            placeholder="JobHunt, Microsoft, etc."
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <div className="flex items-center gap-4 mt-8">
            <button
              className="px-6 py-3 bg-gradient-to-r from-gray-300 to-gray-500 text-gray-800 rounded-lg shadow-md hover:from-gray-400 hover:to-gray-600 transition-transform transform hover:scale-110"
              onClick={() => navigate("/admin/companies")}
            >
              Cancel
            </button>
            <button
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:from-indigo-500 hover:to-purple-700 transition-transform transform hover:scale-110"
              onClick={registerNewCompany}
            >
              Continue
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}

      <footer className="mt-10 bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600 text-white text-center py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <p className="text-lg font-medium">
            🌟 Powered by{" "}
            <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500 animate-gradient">
              YourCompany™
            </span>
          </p>
          <p className="text-sm mt-2 text-indigo-200">
            Empowering businesses, one step at a time.
          </p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <a
              href="https://www.facebook.com/abinash.nath.pandey"
              className="w-10 h-10 flex items-center justify-center bg-white text-blue-500 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/abin.ash_056/"
              className="w-10 h-10 flex items-center justify-center bg-white text-pink-500 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://github.com/abinash2055"
              className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full shadow-md hover:scale-110 transition-transform duration-300"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CompanyCreate;
