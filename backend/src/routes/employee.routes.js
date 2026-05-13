const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");
const {employeeDashboardController} = require("../controllers/employeeDashboard.controller");
const {employeeProfileController, getProfile, updateProfile} = require("../controllers/employeeProfile.controller");
const employeeApplicationsController = require("../controllers/employeeApplications.controller");
const employeeFindJobsController = require("../controllers/employeeFindJobs.controller");
const employeeTrustScoreController = require("../controllers/employeeTrustScore.controller");
const employeeWorkHistoryController = require("../controllers/employeeWorkHistory.controller")

const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

router.get('/dashboard', authMiddleware, roleMiddleware("employee"), employeeDashboardController);
router.get('/profile', authMiddleware, roleMiddleware("employee"), employeeProfileController);
router.get('/applications', authMiddleware, roleMiddleware("employee"), employeeApplicationsController);
router.get('/find-jobs', authMiddleware, roleMiddleware("employee"), employeeFindJobsController);
router.get('/trust-score', authMiddleware, roleMiddleware("employee"), employeeTrustScoreController);
router.get('/work-history', authMiddleware, roleMiddleware("employee"), employeeWorkHistoryController);


//profile
router.get("/profile-data", authMiddleware, roleMiddleware("employee"), getProfile);
router.put("/profile-data", authMiddleware, roleMiddleware("employee"),
        upload.fields([
            { name: "profileImage", maxCount: 1 },
            { name: "coverImage", maxCount: 1 },
            { name: "certifications", maxCount: 10 }
        ]), updateProfile); 

module.exports = router;