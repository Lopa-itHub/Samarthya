const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const searchController = require("../controllers/search.controller");

const router = express.Router();

router.get("/", authMiddleware, searchController);

module.exports = router;