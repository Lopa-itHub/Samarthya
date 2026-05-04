function messageController(req, res) {
  res.status(200).json({
    message: "Message route protected successfully"
  });
}

module.exports = messageController;