import {templates} from '../templates.js';
import TodoList from './todo-list-view.js'
import Todo from './todo-view.js'
import * as Mn from 'backbone.marionette';

export default Mn.LayoutView.extend({
  className: 'todos',

  template: templates['todos-template'],

  regions: {
    'list': '.todos__list'
  },

  initialize() {
    "use strict";

  },

  onRender() {
    "use strict";
    this.showChildView('list', new TodoList({
      childView: Todo
    }))
  }
});
