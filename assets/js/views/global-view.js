module.exports = Backbone.View.extend({
  el: '#app-view',

  events: {
    'dragover .trash': 'dragover',
    'drop .trash': 'drop',
    'dragleave .trash': 'dragleave'
  },

  initialize: function () {
    this.render();
    this.els = {};
    this.els.$trashImage = this.$('.trash__image');
    this.els.$trash = this.$('.trash');
  },

  dragover: function (e) {
    e.preventDefault();
    this.els.$trashImage.addClass('trash__image_dragover');
  },

  dragleave: function (e) {
    this.els.$trashImage.removeClass('trash__image_dragover');
  },

  drop: function (e) {
    var self = this;
    var modelId = e.originalEvent.dataTransfer.getData('text/plain');
    if (modelId) app.collections.todos.remove(modelId);
    this.els.$trash.addClass('trash_deleted');
    setTimeout(function () {
      self.els.$trash.removeClass('trash_deleted');
    }, 1500)
  }
});
