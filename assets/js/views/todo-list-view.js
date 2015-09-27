import {templates} from '../templates.js';
import * as Mn from 'backbone.marionette';
import Backbone from 'backbone';
import app from '../app.js';

export default Mn.CollectionView.extend({
  initialize() {
    "use strict";
    this.collection = app.todos;
    this.render();
  }
});
