// server.js
require("dotenv").config();

const path = require("path");
const express = require("express");
const session = require("express-session");

const connectDB = require("./config/db");

const app = express();

connectDB(); // Initialize database connection

// =========================
// App Configuration
// =========================
const PORT = process.env.PORT || 3000;

// =========================
// View Engine (EJS)
// =========================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// =========================
// Middleware
// =========================
app.use(express.urlencoded({ extended: false })); // for form posts
app.use(express.json()); // for JSON payloads
app.use(express.static(path.join(__dirname, "public"))); // static assets

// Sessions (required for login/auth)
app.use(
  session({
    secret: process.env.SESSION_SECRET || "coursepilot_dev_secret_change_me",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true
      // secure: true, // enable only when using HTTPS in production
    }
  })
);

// =========================
// Routes (temporary placeholder for now)
// =========================
app.get("/", (req, res) => {
  res.status(200).render("pages/home", {
    title: "CoursePilot",
    user: req.session.user || null
  });
});

// Health check (useful for debugging)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// =========================
// 404 Handler
// =========================
app.use((req, res) => {
  res.status(404).render("pages/404", {
    title: "Not Found",
    user: req.session.user || null
  });
});

// =========================
// Global Error Handler
// =========================
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).render("pages/500", {
    title: "Server Error",
    user: req.session.user || null
  });
});

// =========================
// Start Server
// =========================
app.listen(PORT, () => {
  console.log(`CoursePilot running at http://localhost:${PORT}`);
});