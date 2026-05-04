function complaintController(req, res) {
  res.status(200).json({
    message: "Complaint route protected successfully"
  });
}

module.exports = complaintController;