async function employeeTrustScoreController(req, res) {
  try {
    res.status(200).json({
      message: "Employee trust-score accessed successfully",
      user: req.user
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
}

module.exports = employeeTrustScoreController;