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
  } catch (error) {
    console.log(error);
  }
};
