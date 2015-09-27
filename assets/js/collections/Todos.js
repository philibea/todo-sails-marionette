import Backbone from 'backbone';
import app from '../app.js';

export default Backbone.Collection.extend({

  comparator(m) {
    "use strict";
    return new Date(m.get('date'));
  },

  url() {
    return app.config.paths.todos;
  },

  initialize() {
    "use strict";
  }
});
