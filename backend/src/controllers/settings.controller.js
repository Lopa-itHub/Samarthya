function settingsController(req, res) {
  res.status(200).json({
    message: "Settings route protected successfully"
  });
}

module.exports = settingsController;