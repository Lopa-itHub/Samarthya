const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const complaintController = require("../controllers/complaint.controller");

const router = express.Router();

router.get("/", authMiddleware, complaintController);

module.exports = router;