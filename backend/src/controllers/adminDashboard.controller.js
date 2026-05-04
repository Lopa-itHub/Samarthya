async function adminDashboardController(req, res) {
  try {
    res.status(200).json({
      message: "Admin dashboard accessed successfully",
      user: req.user
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
}

module.exports = adminDashboardController;