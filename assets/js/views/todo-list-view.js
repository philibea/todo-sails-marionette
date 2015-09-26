import {templates} from '../templates.js';
import * as Mn from 'backbone.marionette';
import * as Backbone from 'backbone';

export default Mn.CollectionView.extend({
  collection: new Backbone.Collection({
    name: 'FIRST',
    date: '23143'
  }),
  initialize() {
    "use strict";
    this.render();
  }
});
