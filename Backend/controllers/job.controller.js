import { Job } from "../models/job.model.js";

// Admin To Post the job.............
export const postJob = async (req, res) => {
  try {
    // details of post
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experience,
      position,
      companyId,
    } = req.body;

    // to find which user is posting job
    // Authenticated user ID (admin/recruiter)
    const userId = req.id;

    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobType ||
      !experience ||
      !position ||
      !companyId
    ) {
      return res.status(400).json({
        message: "Any Field is missing to entry...",
        success: false,
      });
    }

    // To create a Job
    const job = await Job.create({
      title,
      description,
      requirements: requirements.split(","),
      salary: Number(salary),
      location,
      jobType,
      experienceLevel: Number(experience),
      position: Number(position),
      company: companyId,
      created_by: userId,
    });

    return res.status(201).json({
      message: "New Job has been created successfully..... !!!",
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "An error occurred while creating the job.",
      success: false,
    });
  }
};

// To get all Job for Student................
export const getAllJobs = async (req, res) => {
  try {
    // To filter the job
    const keyword = req.query.keyword || "";

    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };

    // To find now
    const jobs = await Job.find(query)
      .populate({ path: "company" })
      .sort({ createdAt: -1 });

    // If Job is not found
    if (!jobs) {
      return res.status(404).json({
        message: "Job is not Found...",
        status: false,
      });
    }

    // If job is found
    return res.status(200).json({
      message: "Job Fetched Successfully...",
      jobs,
      status: true,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "An error occurred while fetching jobs.",
      success: false,
    });
  }
};

// To find the Job for Student...........
// To find Job by Id....
export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path: "applications",
    });

    // remaining to use populate

    // If job is not found.
    if (!job) {
      return res.status(404).json({
        message: "Job is not Found...",
        status: false,
      });
    }

    // If job is found
    return res.status(200).json({
      message: "Job Found Successfully...",
      job,
      status: true,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "An error occurred while fetching the job.",
      success: false,
    });
  }
};

// Total Job Posted by Admin
export const getAdminJobs = async (req, res) => {
  try {
    // To get Admin Id
    const adminId = req.id;

    // to find job
    const jobs = await Job.find({ created_by: adminId }).populate({
      path: "company",
      createdAt: -1,
    });

    if (!jobs) {
      return res.status(404).json({
        message: "Jobs are not Found or not created by admin(recruiter)....",
        status: false,
      });
    }

    // if jobs are found
    return res.status(200).json({
      message: "List of jobs are given below",
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
