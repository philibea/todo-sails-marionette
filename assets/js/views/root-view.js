import * as Mn from 'backbone.marionette';

export default Mn.LayoutView.extend({
  el: '#app-view',

  regions: {
    form: '.form-container',
    todos: '.todos-container',
    trash: '.trash'
  },
  initialize() {
  },

  render() {
    return this;
  }

});
