const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");

const adminDashboardController = require("../controllers/adminDashboard.controller");
const addAdmin = require("../controllers/adminAddAdmin.controller");
const { adminJobsController, deleteJob} = require("../controllers/adminJobs.controller");
const {adminUsersController,deleteUser} = require("../controllers/adminUsers.controller");

const adminReportsController = require("../controllers/adminReports.controller");

const adminAnalyticsController = require("../controllers/adminAnalytics.controller");

const router = express.Router();

router.get('/dashboard', authMiddleware, roleMiddleware("admin"), adminDashboardController);
router.post("/add-admin", authMiddleware, roleMiddleware("admin"), addAdmin);
router.get('/jobs', authMiddleware, roleMiddleware("admin"), adminJobsController);

router.delete("/jobs/:id", authMiddleware,roleMiddleware("admin"),deleteJob);

router.get('/users', authMiddleware, roleMiddleware("admin"), adminUsersController);
router.delete("/users/:id",authMiddleware,roleMiddleware("admin"),deleteUser);
router.get('/reports', authMiddleware, roleMiddleware("admin"), adminReportsController);

router.get("/analytics",authMiddleware,roleMiddleware("admin"),adminAnalyticsController);
 
module.exports = router;