function connectionController(req, res) {
  res.status(200).json({
    message: "Connection route protected successfully"
  });
}

module.exports = connectionController;