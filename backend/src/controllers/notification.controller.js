function notificationController(req, res) {
  res.status(200).json({
    message: "Notification route protected successfully"
  });
}

module.exports = notificationController;