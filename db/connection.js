const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/hackernews");
mongoose.Promise = Promise;

module.exports = mongoose;
