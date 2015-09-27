import * as Mn from 'backbone.marionette';
import app from '../app.js';

export default Mn.LayoutView.extend({
  el: '#app-view',

  regions: {
    form: '.form-container',
    todos: '.todos-container',
    trash: '.trash'
  },

  closersHash: {
    'click': 'dispatch',
    'keyup': 'dispatch'
  },

  initialize() {
    "use strict";
    app.todosChannel.reply('set:closers', this.setClosers, this);
    app.todosChannel.reply('unset:closers', this.undelegateEvents, this);
  },

  render() {
    return this;
  },

  setClosers() {
    "use strict";
    this.delegateEvents(this.closersHash);
  },

  dispatch(e) {
    "use strict";
    var $target = $(e.target);
    if ((!$target.hasClass('todo_editing') && !$target.parents('.todo_editing').length) || e.keyCode === app.globals.KEY_ESCAPE) app.todosChannel.request('unset:closers remove:edit rerender');
  }
});
