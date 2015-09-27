import * as Mn from 'backbone.marionette';
import app from '../app.js';

export default Mn.ItemView.extend({

  el: '.trash',

  template: false,

  ui: {
    trashImage: '.trash__image'
  },

  events: {
    'dragover': 'dragover',
    'drop': 'drop',
    'dragleave': 'dragleave'
  },

  initialize() {
    this.bindUIElements();
  },

  onRender() {
  },

  dragover(e) {
    e.preventDefault();
    this.ui.trashImage.addClass('trash__image_dragover');
  },

  dragleave(e) {
    this.ui.trashImage.removeClass('trash__image_dragover');
  },

  drop(e) {
    var self = this;
    var modelId = e.originalEvent.dataTransfer.getData('text/plain');
    if (modelId) app.todos.get(modelId).destroy({
      success() {
        app.todosChannel.request('change:length');
        self.$el.addClass('trash_deleted');
        setTimeout(function () {
          self.$el.removeClass('trash_deleted');
        }, 1500)
      },
      wait: true
    });
    this.ui.trashImage.removeClass('trash__image_dragover');
  }
});
