import {templates} from '../templates.js';
import * as Mn from 'backbone.marionette';

export default Mn.ItemView.extend({
  className: 'todo',

  template: templates['todo-template'],

  events: {
    'click .todo__button': 'completeTodo'
  },

  initialize() {
    "use strict";
  },

  onRender() {
    "use strict";
    if (this.model.get('completed')) this.$el.addClass('todo_completed');
  },

  completeTodo() {
    "use strict";
    this.model.save({'completed': true});
    this.render();
  }
});
