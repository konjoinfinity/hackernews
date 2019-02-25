const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LinkSchema = new Schema({
  title: String,
  description: String,
  link: String,
  date: Date
});

module.exports = LinkSchema;
