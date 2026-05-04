async function employerProfileController(req, res) {
  try {
    res.status(200).json({
      message: "Employer profile page accessed successfully",
      user: req.user
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
}

module.exports = employerProfileController;