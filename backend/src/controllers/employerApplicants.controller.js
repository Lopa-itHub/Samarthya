async function employerApplicantsController(req, res) {
  try {
    res.status(200).json({
      message: "Employer applicants page accessed successfully",
      user: req.user
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
}

module.exports = employerApplicantsController;