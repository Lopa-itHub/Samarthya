const userModel = require("../models/user.model");

async function adminAnalyticsController(req, res) {

  try {

    const users = await userModel.find();

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    const monthlyUsers = months.map((month, index) => {

      const count = users.filter((user) => {

        const userMonth = new Date(user.createdAt).getMonth();

        return userMonth === index;

      }).length;

      return {
        name: month,
        users: count
      };

    });

    res.status(200).json({
      success: true,
      monthlyUsers
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error"
    });

  }

}

module.exports = adminAnalyticsController;