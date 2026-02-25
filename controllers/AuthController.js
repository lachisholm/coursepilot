const User = require("../models/User");

// Show Register Page
exports.getRegister = (req, res) => {
  res.render("pages/register");
};

// Handle Register
exports.postRegister = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.send("User already exists");
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      password
    });

    req.session.userId = user._id;
    res.redirect("/dashboard");

  } catch (error) {
    console.error(error);
    res.render("pages/500");
  }
};

// Show Login Page
exports.getLogin = (req, res) => {
  res.render("pages/login");
};

// Handle Login
exports.postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.send("Invalid credentials");
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.send("Invalid credentials");
    }

    req.session.userId = user._id;
    res.redirect("/dashboard");

  } catch (error) {
    console.error(error);
    res.render("pages/500");
  }
};

// Logout
exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};