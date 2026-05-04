const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const notificationController = require("../controllers/notification.controller");

const router = express.Router();

router.get("/", authMiddleware, notificationController);

module.exports = router;