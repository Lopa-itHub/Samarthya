async function employeeFindJobsController(req, res) {
  try {
    res.status(200).json({
      message: "Employee find-jobs accessed successfully",
      user: req.user
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
}

module.exports = employeeFindJobsController;