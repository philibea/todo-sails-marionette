import {templates} from '../templates.js';
import TodoList from './todo-list-view.js'
import Todo from './todo-view.js';
import * as Mn from 'backbone.marionette';
import app from '../app.js';

export default Mn.LayoutView.extend({
  className: 'todos',

  template: templates['todos-template'],

  ui: {
    list: '.todos-list',
    counter: '.todos__head span'
  },

  regions: {
    'list': '.todos__list'
  },

  initialize() {
    "use strict";
    app.todosChannel.reply('change:length', this.updateCounter, this);
  },

  onRender() {
    "use strict";
    app.todoList = new TodoList({
      childView: Todo
    });
    this.showChildView('list', app.todoList);
    this.updateCounter();
  },

  updateCounter: function () {
    this.ui.counter.text(app.todos.length);
  }
});
