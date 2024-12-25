import { Company } from "../models/company.model.js";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

// For registration of the company
export const registerCompany = async (req, res) => {
  try {
    // For Company Name
    const { companyName } = req.body;
    if (!companyName) {
      return res.status(400).json({
        message: "Company name is required...",
        success: false,
      });
    }

    // To find Company
    let company = await Company.findOne({ name: companyName });

    if (company) {
      return res.status(400).json({
        message: "You can't register with same company name...",
        success: false,
      });
    }

    // By Authentication
    company = await Company.create({
      name: companyName,
      userId: req.id,
    });

    return res.status(201).json({
      message: "Company is registered successfully...",
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Error during registration..",
      success: false,
    });
  }
};

// To get Company with Authentication
export const getCompany = async (req, res) => {
  try {
    const userId = req.id; // Logged in user id
    const companies = await Company.find({ userId });

    if (!companies) {
      return res.status(404).json({
        message: "Companies are not found...",
        success: false,
      });
    }

    return res.status(200).json({
      companies,
      success: true,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Error in Company Search",
      success: false,
    });
  }
};

// To get Company with Id
export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);

    if (!company) {
      return res.status(404).json({
        message: "Company is not found...",
        success: false,
      });
    }

    return res.status(200).json({
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Error in Company Search by this ID..",
      success: false,
    });
  }
};

// update company details
export const updateCompany = async (req, res) => {
  try {
    // for details
    const { name, description, website, location } = req.body;

    // for logo
    const file = req.file;

    // cloudinary comes here
    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
    const logo = cloudResponse.secure_url;

    const updateData = { name, description, website, location, logo };

    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    // if Company not founded
    if (!company) {
      return res.status(404).json({
        message: "Company is not found...",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Company information has been updated...",
      success: true,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Error during company update.",
      success: false,
    });
  }
};
