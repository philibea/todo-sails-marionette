import * as Mn from 'Marionette';

export default Mn.LayoutView.extend({
  el: '#app-view',
  regions: {
    form: '.form-container',
    todos: '.todos-container',
    trash: 'footer.trash'
  },
  initialize() {
    console.log('initialized');
  },

  render() {
    return this;
  }
});
