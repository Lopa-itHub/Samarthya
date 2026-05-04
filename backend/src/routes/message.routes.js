const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const messageController = require("../controllers/message.controller");

const router = express.Router();

router.get("/", authMiddleware, messageController);

module.exports = router;