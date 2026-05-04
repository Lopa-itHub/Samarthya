const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");

const adminDashboardController = require("../controllers/adminDashboard.controller");
const addAdmin = require("../controllers/adminAddAdmin.controller");
const adminJobsController = require("../controllers/adminJobs.controller");
const adminUsersController = require("../controllers/adminUsers.controller");
const adminReportsController = require("../controllers/adminReports.controller");

const router = express.Router();

router.get('/dashboard', authMiddleware, roleMiddleware("admin"), adminDashboardController);
router.post("/add-admin", authMiddleware, roleMiddleware("admin"), addAdmin);
router.get('/jobs', authMiddleware, roleMiddleware("admin"), adminJobsController);
router.get('/users', authMiddleware, roleMiddleware("admin"), adminUsersController);
router.get('/reports', authMiddleware, roleMiddleware("admin"), adminReportsController);
 
module.exports = router;