import {templates} from '../templates.js';
import * as Mn from 'backbone.marionette';
import moment from 'moment';
import EditView from './edit-view.js'
import app from '../app.js';

export default Mn.ItemView.extend({
  className: 'todo',

  template: templates['todo-template'],

  ui: {
      'date': '.todo__date'
  },

  events: {
    'dragstart': 'dragging',
    'click .todo__button': 'completeTodo',
    'dblclick': 'editTodo'
  },

  initialize() {
    "use strict";
  },

  onRender() {
    "use strict";
    if (this.model.get('completed')) this.$el.addClass('todo_completed');
    this.ui.date.text(moment(new Date(this.model.get('date'))).endOf('day').fromNow());
    this.$el.attr('draggable', true);
  },

  completeTodo() {
    "use strict";
    this.model.save({'completed': true});
    this.render();
  },

  dragging(e) {
    "use strict";
    e.originalEvent.dataTransfer.setData('text/plain', this.model.id);
  },

  editTodo() {
    "use strict";
    if (this.model.get('completed')) return false;
    var editView = new EditView({
      model: this.model,
      actualView: this
    });
    this.undelegateEvents();
    this.$el.attr('draggable', false);
    this.$el.addClass('todo_editing');
    this.$el.html(editView.el);
    app.todosChannel.replyOnce('rerender', this.rerender, this);
  },

  rerender() {
    "use strict";
    this.render();
    this.delegateEvents();
  }
});
