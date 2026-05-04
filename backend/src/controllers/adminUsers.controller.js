async function adminUsersController(req, res) {
  try {
    res.status(200).json({
      message: "Admin Users-details page accessed successfully",
      user: req.user
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
}

module.exports = adminUsersController;