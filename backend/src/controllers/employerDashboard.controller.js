async function employerDashboardController(req, res) {
  try {
    res.status(200).json({
      message: "Employer dashboard accessed successfully",
      user: req.user
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
}

module.exports = employerDashboardController;