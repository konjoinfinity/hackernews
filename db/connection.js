const mongoose = require("mongoose");
mongoose.Promise = Promise;

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    family: 4
  }, function(err) {
    if (err) {throw err;
    } else {console.log("Production Database Connection Successful");}
    })
} else {
  mongoose.connect("mongodb://127.0.0.1/hackernews"), { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    family: 4
  }, function(err) {
    if (err) {throw err;
    } else {console.log("Development Database Connection Successful")}
    };
}

module.exports = mongoose;
