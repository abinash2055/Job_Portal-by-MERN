import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

// To apply Job by user
export const applyJob = async (req, res) => {
  try {
    // to get id of user
    const userId = req.id;

    // to get id of job
    const jobId = req.params.id;

    // if job id not found
    if (!jobId) {
      return res.status(400).json({
        message: "Job id is required......",
        success: false,
      });
    }

    // To check if user already applied for the job or not
    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });

    // If job is already applied
    if (existingApplication) {
      return res.status(400).json({
        message: "You had already applied for this job...",
        success: false,
      });
    }

    // To check whether job exist or not
    const job = await Job.findById(jobId);

    // If job is not existing
    if (!job) {
      return res.status(404).json({
        message: "Job is not found by this ID...",
        success: false,
      });
    }

    // To create a new Application that is user can apply for the job
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });

    // If array created as Job Application in Job model
    job.application.push(newApplication._id);

    // It saves the Job Details
    await job.save();

    return res.status(201).json({
      message: "Finally Job is applied by you successfully....",
      success: true,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "An error occurred while applying for the job.",
      success: false,
    });
  }
};

// To get all the applied Job as a list
export const getAppliedJobs = async (req, res) => {
  try {
    // Get id of user
    const userId = req.id;

    // To get all the applied job list
    const application = await Application.find({ applicant: userId })
      .sort({
        createdAt: -1,
      })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },

        // Nested Populate
        populate: {
          path: "company",
          options: { sort: { createdAt: -1 } },
        },
      });

    // If Application is not Found
    if (!application) {
      return res.status(404).json({
        message: "No Application for the post applied by the user...",
        success: false,
      });
    }

    // If application is found
    return res.status(200).json({
      message: "Application for the post applied by the user...",
      application,
      success: true,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "An error occurred while retrieving applications.",
      success: false,
    });
  }
};

// To find Applicants by admin
export const getApplicants = async (req, res) => {
  try {
    // Get the Job ID from the request parameters
    const jobId = req.params.id;

    // Check total users applied for the same job
    const job = await Job.findById(jobId).populate({
      path: "application", // Correct field name from Job schema
      options: { sort: { createdAt: -1 } },

      // Nested Populate
      populate: {
        path: "applicant",
      },
    });

    // If job is not found
    if (!job) {
      return res.status(404).json({
        message: "Job not found.",
        success: false,
      });
    }

    // If job is found
    return res.status(200).json({
      message: "Job found successfully.",
      job,
      success: true,
    });
  } catch (error) {
    console.error("Error in getApplicants:", error);

    return res.status(500).json({
      message: "An error occurred while retrieving applicants.",
      success: false,
    });
  }
};

// To update status as (rejected, selected, pending)
export const updateStatus = async (req, res) => {
  try {
    // To get status
    const { status } = req.body;

    // To get Application -- ID
    const applicationId = req.params.id;

    // If status is not present
    if (!status) {
      return res.status(400).json({
        message: "Status is required.....",
        success: false,
      });
    }

    // Find the application by application Id
    const application = await Application.findOne({ _id: applicationId });

    // If application is not found
    if (!application) {
      return res.status(404).json({
        message: "Application is not found.....",
        success: false,
      });
    }

    // if application found update the status
    // changing to lowercase
    application.status = status.toLowerCase();

    // To sav the updated status
    await application.save();

    return res.status(200).json({
      message: "Status has been updated successfully.......",
      success: true,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "An error occurred while updating status.",
      success: false,
    });
  }
};
