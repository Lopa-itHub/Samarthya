function searchController(req, res) {
  res.status(200).json({
    message: "search route protected successfully"
  });
}

module.exports = searchController;