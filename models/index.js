const mongoose = require("../db/connection");

module.exports = {
  Link: mongoose.model("Link", require("./link")),
  User: mongoose.model("User", require("./user"))
};
