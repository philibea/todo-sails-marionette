var app = require('../app');
var config = require('../config');
var Todo = require('../models/Todo');

module.exports = Backbone.Collection.extend({
  comparator: function(m) {
    var d = new Date(m.get('date'));
    return d;
  },

  url: config.paths.todos,

  initialize: function () {
    this.model = Todo;
  }
});
