const express = require("express");
const router = express.Router();

const CourseController = require("../controllers/CourseController");
const { requireAuth } = require("../middleware/authMiddleware");

// Dashboard
router.get("/dashboard", requireAuth, CourseController.getDashboard);

// Create
router.post("/courses", requireAuth, CourseController.createCourse);

// Edit
router.get("/courses/:id/edit", requireAuth, CourseController.getEditCourse);

// Update
router.post("/courses/:id/update", requireAuth, CourseController.updateCourse);

// Delete
router.post("/courses/:id/delete", requireAuth, CourseController.deleteCourse);

module.exports = router;