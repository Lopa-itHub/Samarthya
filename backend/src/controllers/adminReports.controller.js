async function adminReportsController(req, res) {
  try {
    res.status(200).json({
      message: "Admin Reports page accessed successfully",
      user: req.user
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
}

module.exports = adminReportsController;