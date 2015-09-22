var app = require('../app');
var moment = require('../../components/moment/moment');
var EditView = require('./edit-view');

module.exports = Backbone.View.extend({
  className: 'todo',

  eventsHash: {
    'click .todo__button': 'closeTask',
    'dragstart': 'dragging',
    'dblclick': 'edit'
  },

  template: Handlebars.compile($('#todoTemplate').html()),

  initialize: function (options) {
    this.model = options.model;
    this.listenTo(this.model, 'remove', this.destroyModel);
    this.listenTo(this.model, 'sync', this.render);

    this.render();
  },

  render: function () {
    var html = this.template(this.model.toJSON());
    if (this.model.get('completed')) this.$el.addClass('todo_completed');
    var formattedDate = moment(this.model.get('date')).endOf('day').fromNow();
    this.$el.html(html);
    this.$el.attr('draggable', true);
    this.$el.removeClass('todo_editing');
    this.$('.todo__date').text(formattedDate);
    this.delegateEvents(this.eventsHash);

    return this;
  },

  closeTask: function () {
    this.model.save({'completed': true});
    this.render();
  },

  dragging: function (e) {
    e.originalEvent.dataTransfer.setData('text/plain', this.model.id);
  },

  destroyModel: function (model) {
    var self = this;
    model.destroy({
      success: function () {
        self.remove();
        app.views.globalView.els.$trashImage.removeClass('trash__image_dragover');
      },

      error: function (model, response) {
        app.collections.todos.add(model, {
          silent: true
        });
        console.log('Error', response);
      },

      wait: true
    });
  },

  edit: function () {
    if (this.model.get('completed')) return false;
    var editView = new EditView({
      model: this.model,
      actualView: this
    });
    this.undelegateEvents();
    this.$el.attr('draggable', false);
    this.$el.addClass('todo_editing');
    this.$el.html(editView.el);
  }
});
