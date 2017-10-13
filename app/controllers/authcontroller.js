var exports = (module.exports = {});

exports.signup = function(req, res) {
  res.render("signup");
};

exports.signin = function(req, res) {
  res.render("signin");
};

exports.dashboard = function(req, res) {
  res.render("dashboard", { layout: "app", firstname: req.user.firstname, username: req.user.username, id: req.body.id});
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect("/signin");
  });
};
