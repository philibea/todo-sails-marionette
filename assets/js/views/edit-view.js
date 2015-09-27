import {templates} from '../templates.js';
import * as Mn from 'backbone.marionette';
import app from '../app.js';

export default Mn.ItemView.extend({
  tagName: 'form',

  className: 'todo__form',

  template: templates['edit-template'],

  ui: {
    'picker': '.todo__date',
    'textarea': 'textarea',
    'date': 'input[name=date]'
  },

  events: {
    'submit': 'saveModel'
  },

  initialize(options) {
    "use strict";
    this.actualView = options.actualView;
    this.render();
  },

  onRender() {
    "use strict";
    this.ui.picker.pickadate({
      format: 'yyyy/mm/dd',
      formatSubmit: 'yyyy/mm/dd',
      hiddenName: true
    });
    app.todosChannel.request('set:closers');
    app.todosChannel.replyOnce('remove:edit', this.remove, this);
  },

  saveModel(e) {
    "use strict";
    e.preventDefault();
    let self = this,
      name = this.ui.textarea.val(),
      date = this.ui.date.val();

    if (!name.length) return false;

    this.model.save(
      { name, date },
      {
        success() {
          self.remove();
          app.todosChannel.stopReplying('remove:edit');
          app.todosChannel.request('unset:closers rerender sort');
        },

        error(model, response) {
          console.log('Error while saving', response);
        },

        wait: true
      });
  }
});
