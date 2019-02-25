//Each link should have a url, title, brief description and the date it was posted.

const { Link } = require("../models/index");

module.exports = {
  new: function(req, res) {
    res.render("link/new");
  },
  create: function(req, res) {
    const { title, description, link } = req.body;
    Link.create({
      title,
      description,
      link,
      date: Date.now()
    }).then(link => {
      res.redirect(`/link/${link._id}`);
    });
  },
  show: function(req, res) {
    Link.findById(req.params.id).then(link => {
      res.render("link/show", { link });
    });
  },
  edit: function(req, res) {
    Link.findById(req.params.id).then(link => {
      res.render("link/edit", { link });
    });
  },
  update: function(req, res) {
    const { title, description, link } = req.body;

    Link.findOneAndUpdate(
      req.params.id,
      {
        title,
        description,
        link
      },
      {
        runValidators: true
      }
    )
      .then(link => {
        res.redirect(`/link/${link._id}`);
      })
      .catch(err => {
        console.log(err);
      });
  },
  delete: function(req, res) {
    Link.remove({ _id: req.params.id }).then(link => {
      console.log(link);
      res.redirect("/");
    });
  }
};
