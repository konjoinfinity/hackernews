const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/hackernews"), { useNewUrlParser: true };
mongoose.Promise = Promise;

module.exports = mongoose;

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL);
} else {
  mongoose.connect("mongodb://localhost/hackernews"), { useNewUrlParser: true };
}
