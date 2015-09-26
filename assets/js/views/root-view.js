import * as Mn from 'backbone.marionette';
import {templates} from '../templates.js';

export default Mn.LayoutView.extend({
  el: '#app-view',
  regions: {
    form: '.form-container',
    todos: '.todos-container',
    trash: 'footer.trash'
  },
  initialize(options) {
  },

  render() {
    return this;
  }

});
