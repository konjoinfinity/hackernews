const express = require("express");
const router = express.Router();
//Creating a variable called userController to require the user controller
//located at ../controllers/user.
const userController = require("../controllers/user");

// Sign up
//Created routes for the signup get and post.  Assigning getSignup to the get
//route and postSignup to the post route.
router.get("/signup", userController.getSignup);
router.post("/signup", userController.postSignup);

// Log in
//Created routes for the login get and post.  Assigning getLogin to the get
//route and postLogin to the post route.
router.get("/login", userController.getLogin);
router.post("/login", userController.postLogin);

// Log out
//Created a route for the logout get.  Assigning getLogout to the get route.
router.get("/logout", userController.getLogout);

module.exports = router;
