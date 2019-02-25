const express = require("express");
const router = express.Router();
const { Link } = require("../models/index");
//Creating a variable called authenticatedUser and requiring the
//authenticatedUser module from ../utils/authenticatedUser.
const authenticatedUser = require("../utils/authenticatedUser");

//Added the authenticatedUser to the arguments to check to see if the user is
//authenticated.  If the user is authenticated, the index page is rendered and
//the success message is flashed.
router.get("/", authenticatedUser, function(req, res) {
  Link.find({})
    .sort({ priority: "asc" })
    .then(links => {
      res.render("index", { links, success: req.flash("success") });
    });
});

router.use(require("./user"));

//authenticatedUser was added as a requirement to view /link.
router.use("/link", authenticatedUser, require("./link.js"));

module.exports = router;
