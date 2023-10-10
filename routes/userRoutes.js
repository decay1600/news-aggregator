const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/register", authController.register);
router.get("/login", authController.login);

// Apply the protect middleware for the below routes
router.use(authController.protect);

router.get("/preferences", userController.preferences);
router.put("/preferences", userController.updatePreferences);

module.exports = router;

// This file has the Routes defined for user
