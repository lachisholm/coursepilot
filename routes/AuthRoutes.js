const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/AuthController");

router.get("/register", AuthController.getRegister);
router.post("/register", AuthController.postRegister);

router.get("/login", AuthController.getLogin);
router.post("/login", AuthController.postLogin);

router.get("/logout", AuthController.logout);

module.exports = router;