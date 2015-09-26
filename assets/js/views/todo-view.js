import {templates} from '../templates.js';
import * as Mn from 'backbone.marionette';

export default Mn.ItemView.extend({
  className: 'todo',

  template: templates['todo-template'],

  initialize() {
    "use strict";
  }
});
