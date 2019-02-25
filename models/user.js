const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Assigning passportLocalMongoose to require usage of the passport-local-mongoose
//npm package.
const passportLocalMongoose = require("passport-local-mongoose");

//Created a new schema called UserSchema to include username and password fields.
const UserSchema = new Schema({
  username: String,
  password: String
});

//Adding a plug to UserSchema to utilize passportLocalMongoose.
UserSchema.plugin(passportLocalMongoose);

module.exports = UserSchema;
