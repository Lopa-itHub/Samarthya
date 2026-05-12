const userModel = require("../models/user.model");
const postedJobModel = require("../models/postedJob.model");

async function adminDashboardController(req, res) {

  try {

    // Fetch all users
    const users = await userModel.find();

    const jobs = await postedJobModel.find();

    // Count roles
    const employees = users.filter(
      (user) => user.role === "employee"
    ).length;

    const employers = users.filter(
      (user) => user.role === "employer"
    ).length;

    const admins = users.filter(
      (user) => user.role === "admin"
    ).length;

    // Recent users
    const recentUsers = await userModel
      .find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select("name role createdAt profileImage");

    res.status(200).json({

      totalUsers: users.length,
      employees,
      employers,
      admins,
      jobs: jobs.length,

      recentUsers,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error",
    });

  }
}

module.exports = adminDashboardController;