async function employerJobsPostedController(req, res) {
  try {
    res.status(200).json({
      message: "Employer jobs-hiring page accessed successfully",
      user: req.user
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
}

module.exports = employerJobsPostedController;