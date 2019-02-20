const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const LinkSchema = new Schema({
  title: String,
  description: String,
  link: String,
  date: Date
});

module.exports = mongoose.model("Link", LinkSchema);
