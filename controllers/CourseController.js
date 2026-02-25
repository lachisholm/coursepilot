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

// Create Course
exports.createCourse = async (req, res) => {
  try {
    const { title, instructor, semester, description } = req.body;

    await Course.create({
      title,
      instructor,
      semester,
      description,
      user: req.session.userId
    });

    res.redirect("/dashboard");
  } catch (error) {
    console.error(error);
    res.render("pages/500");
  }
};

// Delete Course
exports.deleteCourse = async (req, res) => {
  try {
    await Course.findOneAndDelete({
      _id: req.params.id,
      user: req.session.userId
    });

    res.redirect("/dashboard");
  } catch (error) {
    console.error(error);
    res.render("pages/500");
  }
};

// Show Edit Page
exports.getEditCourse = async (req, res) => {
  try {
    const course = await Course.findOne({
      _id: req.params.id,
      user: req.session.userId
    });

    if (!course) {
      return res.redirect("/dashboard");
    }

    res.render("pages/editCourse", { course });
  } catch (error) {
    console.error(error);
    res.render("pages/500");
  }
};

// Update Course
exports.updateCourse = async (req, res) => {
  try {
    const { title, instructor, semester, description } = req.body;

    await Course.findOneAndUpdate(
      { _id: req.params.id, user: req.session.userId },
      { title, instructor, semester, description }
    );

    res.redirect("/dashboard");
  } catch (error) {
    console.error(error);
    res.render("pages/500");
  }
};