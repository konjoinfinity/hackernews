//Assigns a passport variable to require usage of the passport authentication npm package.
const passport = require("passport");
//Assigns the object user variable from the index model.
const { User } = require("../models/index");

//Creating exportable modules for usage within the express app.
module.exports = {
  //getSignup module renders the user/signup page and flashes the error message.
  getSignup: function(req, res) {
    res.render("user/signup", { error: req.flash("error") });
  },
  //postSignup module assigns a variable to the username and password entered from
  //body form using body-parser.
  postSignup: function(req, res) {
    const { username, password } = req.body;
    //Creates a new user within the User schema using the username and password entered.
    User.register(new User({ username }), password)
      .then(user => {
        //Assigns authenticate as a variable to the local passport.authenticate.
        const authenticate = passport.authenticate("local");
        //Calls the authenticate fuction to flash the success message and redirects to
        //the root directory.
        authenticate(req, res, function() {
          req.flash("success", "You created an account!");
          res.redirect("/");
        });
      })
      //If there is an error message, the error message is flashed and redirects to
      //the /signup page.
      .catch(err => {
        req.flash("error", err.message);
        res.redirect("/signup");
      });
  },
  //getLogin module renders the user/login page and flashes the error or info message.
  getLogin: function(req, res) {
    res.render("user/login", {
      error: req.flash("error"),
      info: req.flash("info")
    });
  },
  //postLogin module assigns authenticate variable to passport.authenticate with
  // the following parameters: "local" and a fucntion including - err, user, and info.
  postLogin: function(req, res, next) {
    const authenticate = passport.authenticate("local", function(
      err,
      user,
      info
    ) {
      //If there is an erro or the user does not exist, the error message is flashed
      //and redirects to the /login page.
      if (err || !user) {
        req.flash("error", info.message);
        res.redirect("/login");
      }
      //If user exists but the password does not match, flashes an the error
      //message, redirects to the /login page.
      req.logIn(user, function(err) {
        if (err) {
          req.flash("error", err.message);
          return res.redirect("/login");
        }
        //If username and password entered match the username and password stored
        //in the database, flashes the success message and redirects to the root
        //directory.
        req.flash("success", "You logged in");
        return res.redirect("/");
      });
    });
    //Calls the authenticate function to run, to continually check authentication
    //throughout the application.
    authenticate(req, res, next);
  },
  //getLogout module logs the user out and redirects to the root directory.
  getLogout: function(req, res) {
    req.logout();
    res.redirect("/");
  }
};
