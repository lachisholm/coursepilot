const express = require("express");
const router = express.Router();

const CourseController = require("../controllers/CourseController");
const { requireAuth } = require("../middleware/authMiddleware");

router.get("/dashboard", requireAuth, CourseController.getDashboard);

router.post("/courses", requireAuth, CourseController.createCourse);

router.post("/courses/:id/delete", requireAuth, CourseController.deleteCourse);

module.exports = router;