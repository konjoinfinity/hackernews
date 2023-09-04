const express = require("express");
const app = express();
const parser = require("body-parser");
const methodOverride = require("method-override");

// added these:
//Assigning variables for uages within our app for cookieParser, flash, session,
//passport, and passport-local(for usage with LocalStrategy and .Strategy)
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

app.set("view engine", "hbs");
app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// added these:
// Activating cookieParser to be used with our app.
app.use(cookieParser());
//Activating session to be used with our app using the secret, resave, and
//saveUninitialized features set to false.
app.use(
  session({
    secret: "KONJO IS BEAUTIFUL",
    resave: false,
    saveUninitialized: false
  })
);
// Activating flash to be used with our app.
app.use(flash());
// Activating passport.initialize to be used with our app.
app.use(passport.initialize());
// Activating passport.session to be used with our app.
app.use(passport.session());

// RIGHT HERE:
// const { User } = require("./models/index");
// Assigning the { User } variable to require the models index file.
const { User } = require("./models/index");
//passport.use creates a new LocalStrategy for the authenticated user.
passport.use(new LocalStrategy(User.authenticate()));
//passport.serializeUser turns the object User.serializeUser into a string.
passport.serializeUser(User.serializeUser());
//passport.serializeUser turns the string User.serializeUser back into an object.
passport.deserializeUser(User.deserializeUser());

//Telling the app to use the function which assigns the global.user to the
//req.user and the res.locals.user to req.user.  Continually checks this.
app.use(function(req, res, next) {
  global.user = req.user;
  res.locals.user = req.user;
  next();
});

app.use(require("./routes/index"));
app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
