const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const connectionController = require("../controllers/connection.controller");

const router = express.Router();

router.get("/",authMiddleware,connectionController);

module.exports = router;