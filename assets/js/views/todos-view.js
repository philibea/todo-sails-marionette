var app = require('../app');
var TodoView = require('./todo-view');

module.exports = Backbone.View.extend({
  className: 'todos',

  template: Handlebars.compile($('#todosTemplate').html()),

  initialize: function (options) {
    this.els = {};
    this.collection = options.collection;
    this.listenTo(this.collection, 'add', this.renderNew);
    this.listenTo(this.collection, 'remove', this.updateCounter);
    this.render();
  },

  render: function () {
    var modelsCnt = this.collection.length;
    var html = this.template({total: modelsCnt});
    this.$el.append(html);
    this.els.$list = this.$('.todos__list');
    this.els.$counter = this.$('.todos__head span');
    this.collection.each(function (item) {
      var todoView = new TodoView({model: item});
      if (item.get('completed')) todoView.$el.addClass('todo_completed');
      this.els.$list.append(todoView.el);
    }, this);
    app.views.globalView.$el.find('.todos-container').append(this.el);

    return this;
  },

  renderNew: function (model) {
    var newView = new TodoView({model: model});
    this.els.$list.prepend(newView.el);
    this.updateCounter();
  },

  updateCounter: function () {
    this.els.$counter.text(this.collection.length);
  }
});
