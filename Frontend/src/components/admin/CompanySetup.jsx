// import React, { useEffect, useState } from "react";
// import Navbar from "../shared/Navbar";
// import { Button } from "../ui/button";
// import { ArrowLeft, Loader2 } from "lucide-react";
// import { Label } from "../ui/label";
// import { Input } from "../ui/input";
// import axios from "axios";
// import { COMPANY_API_END_POINT } from "../../utils/constant";
// import { useNavigate, useParams } from "react-router-dom";
// import { toast } from "sonner";
// import { useSelector } from "react-redux";

// import useGetCompanyById from "../../hooks/useGetCompanyById";

// const CompanySetup = () => {
//   const params = useParams();
//   useGetCompanyById(params.id);
//   const [input, setInput] = useState({
//     name: "",
//     description: "",
//     website: "",
//     location: "",
//     file: null,
//   });
//   const { singleCompany } = useSelector((store) => store.company);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const changeEventHandler = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const changeFileHandler = (e) => {
//     const file = e.target.files?.[0];
//     setInput({ ...input, file });
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", input.name);
//     formData.append("description", input.description);
//     formData.append("website", input.website);
//     formData.append("location", input.location);
//     if (input.file) {
//       formData.append("file", input.file);
//     }
//     try {
//       setLoading(true);
//       const res = await axios.put(
//         `${COMPANY_API_END_POINT}/update/${params.id}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//           withCredentials: true,
//         }
//       );
//       if (res.data.success) {
//         toast.success(res.data.message);
//         navigate("/admin/companies");
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response.data.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     setInput({
//       name: singleCompany.name || "",
//       description: singleCompany.description || "",
//       website: singleCompany.website || "",
//       location: singleCompany.location || "",
//       file: singleCompany.file || null,
//     });
//   }, [singleCompany]);

//   return (
//     <div>
//       <Navbar />
//       <div className="max-w-xl mx-auto my-10">
//         <form onSubmit={submitHandler}>
//           <div className="flex items-center gap-5 p-8">
//             <Button
//               onClick={() => navigate("/admin/companies")}
//               variant="outline"
//               className="flex items-center gap-2 text-gray-500 font-semibold"
//             >
//               <ArrowLeft />
//               <span>Back</span>
//             </Button>
//             <h1 className="font-bold text-xl">Company Setup</h1>
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <Label>Company Name</Label>
//               <Input
//                 type="text"
//                 name="name"
//                 value={input.name}
//                 onChange={changeEventHandler}
//               />
//             </div>
//             <div>
//               <Label>Description</Label>
//               <Input
//                 type="text"
//                 name="description"
//                 value={input.description}
//                 onChange={changeEventHandler}
//               />
//             </div>
//             <div>
//               <Label>Website</Label>
//               <Input
//                 type="text"
//                 name="website"
//                 value={input.website}
//                 onChange={changeEventHandler}
//               />
//             </div>
//             <div>
//               <Label>Location</Label>
//               <Input
//                 type="text"
//                 name="location"
//                 value={input.location}
//                 onChange={changeEventHandler}
//               />
//             </div>
//             <div>
//               <Label>Logo</Label>
//               <Input
//                 type="file"
//                 accept="image/*"
//                 onChange={changeFileHandler}
//               />
//             </div>
//           </div>
//           {loading ? (
//             <Button className="w-full my-4">
//               {" "}
//               <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait{" "}
//             </Button>
//           ) : (
//             <Button type="submit" className="w-full my-4">
//               Update
//             </Button>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CompanySetup;

import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import axios from "axios";
import { COMPANY_API_END_POINT } from "../../utils/constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import useGetCompanyById from "../../hooks/useGetCompanyById";

const CompanySetup = () => {
  const params = useParams();
  useGetCompanyById(params.id);
  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });
  const { singleCompany } = useSelector((store) => store.company);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("website", input.website);
    formData.append("location", input.location);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      setLoading(true);
      const res = await axios.put(
        `${COMPANY_API_END_POINT}/update/${params.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/companies");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setInput({
      name: singleCompany.name || "",
      description: singleCompany.description || "",
      website: singleCompany.website || "",
      location: singleCompany.location || "",
      file: singleCompany.file || null,
    });
  }, [singleCompany]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 to-cyan-600 text-white">
      <Navbar />
      <div className="max-w-3xl mx-auto my-12 bg-white/10 rounded-lg shadow-lg backdrop-blur-md p-8">
        <form onSubmit={submitHandler} className="space-y-8">
          <div className="flex items-center gap-5 mb-6">
            <Button
              onClick={() => navigate("/admin/companies")}
              variant="outline"
              className="flex items-center gap-2 bg-pink-500 hover:bg-yellow-400 text-white px-4 py-2 rounded-full shadow-md transition-transform transform hover:scale-105"
            >
              <ArrowLeft />
              <span>Back</span>
            </Button>
            <h1 className="font-bold text-3xl text-white tracking-wide">
              Company Setup
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-gray-100">Company Name</Label>
              <Input
                type="text"
                name="name"
                value={input.name}
                onChange={changeEventHandler}
                className="w-full px-4 py-3 bg-gray-800 text-gray-200 rounded-lg focus:ring-4 focus:ring-pink-400 transition"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-100">Description</Label>
              <Input
                type="text"
                name="description"
                value={input.description}
                onChange={changeEventHandler}
                className="w-full px-4 py-3 bg-gray-800 text-gray-200 rounded-lg focus:ring-4 focus:ring-pink-400 transition"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-100">Website</Label>
              <Input
                type="text"
                name="website"
                value={input.website}
                onChange={changeEventHandler}
                className="w-full px-4 py-3 bg-gray-800 text-gray-200 rounded-lg focus:ring-4 focus:ring-pink-400 transition"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-100">Location</Label>
              <Input
                type="text"
                name="location"
                value={input.location}
                onChange={changeEventHandler}
                className="w-full px-4 py-3 bg-gray-800 text-gray-200 rounded-lg focus:ring-4 focus:ring-pink-400 transition"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-100">Logo</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={changeFileHandler}
                className="w-full px-4 py-3 bg-gray-800 text-gray-200 rounded-lg focus:ring-4 focus:ring-pink-400 file:font-semibold file:bg-pink-500 file:text-white"
              />
            </div>
          </div>
          {loading ? (
            <Button
              disabled
              className="w-full py-3 bg-pink-400 text-white font-bold rounded-lg flex items-center justify-center gap-2 shadow-lg hover:bg-pink-500 transition-transform transform hover:scale-105"
            >
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Please wait...
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-400 transition-transform transform hover:scale-105"
            >
              Update
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CompanySetup;
