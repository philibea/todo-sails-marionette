module.exports = {
  index: function (req, res) {
    res.view();
  },

  loginView: function (req, res) {
    var hasError = false;
    if (req.session.flash && req.session.flash.error) {
      hasError = true;
      req.session.flash = null;
    }
    res.render('auth/login', {
      error: hasError
    });
  },

  registerView: function (req, res) {
    var hasError = false;
    if (req.session.flash && req.session.flash.error) {
      hasError = true;
      req.session.flash = null;
    }
    res.render('auth/register', {
      error: hasError
    });
  }
};
