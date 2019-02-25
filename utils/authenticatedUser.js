//Creating an exportable module function to check to see if a user has been
//authenticated, if not, flashes that the user must be signed in.  Redirects to
//the /login page.
module.exports = function authenticatedUser(req, res, next) {
  if (req.isAuthenticated()) return next();

  req.flash("info", "You must be signed in to view that page");
  res.redirect("/login");
};
