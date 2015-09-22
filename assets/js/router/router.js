var app = require('../app');
var GlobalView = require('../views/global-view');

module.exports = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  initialize: function () {
    app.views.globalView = new GlobalView();

    console.log(document.cookie);
    app.initTodos();
    app.initFormView();
  },

  index: function () {

  }
});
