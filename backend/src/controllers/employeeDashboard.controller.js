const userModel = require("../models/user.model");

async function employeeDashboardController(req, res) {
  try {
    res.status(200).json({
      message: "Employee dashboard accessed successfully",
      user: req.user
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
}

module.exports = {employeeDashboardController};