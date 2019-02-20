const express = require("express");
const router = express.Router();
const Link = require("../models/index");

router.get("/", function(req, res) {
  Link.find({})
    .sort({ priority: "asc" })
    .then(links => {
      res.render("index", { links });
    });
});

router.use("/link", require("./link.js"));

module.exports = router;
