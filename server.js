require("dotenv").config();

const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");

const connectDB = require("./config/db");

const AuthRoutes = require("./routes/AuthRoutes");
const CourseRoutes = require("./routes/CourseRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.static("public"));

// View Engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Routes
app.use(AuthRoutes);
app.use(CourseRoutes);

app.get("/", (req, res) => {
  res.render("pages/home");
});

// 404
app.use((req, res) => {
  res.status(404).render("pages/404");
});

// 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("pages/500");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`CoursePilot running at http://localhost:${PORT}`);
});