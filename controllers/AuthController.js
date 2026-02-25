const Course = require("../models/Course");

// Dashboard
exports.getDashboard = async (req, res) => {
  try {
    const courses = await Course.find({ user: req.session.userId });

    res.render("pages/dashboard", { courses });
  } catch (error) {
    console.error(error);
    res.render("pages/500");
  }
};

// Create course
exports.createCourse = async (req, res) => {
  try {
    const { title, instructor, semester, description } = req.body;

    await Course.create({
      title,
      instructor,
      semester,
      description,
      user: req.session.userId,
    });

    res.redirect("/dashboard");
  } catch (error) {
    console.error(error);
    res.render("pages/500");
  }
};

// Delete course
exports.deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.redirect("/dashboard");
  } catch (error) {
    console.error(error);
    res.render("pages/500");
  }
};