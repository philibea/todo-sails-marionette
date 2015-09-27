import app from '../app.js'

export default {

  init() {
    "use strict";

    Backbone.Radio.DEBUG = true;

    Backbone.sync = ((original) => {
      return (method, model, options) => {
        options.beforeSend = (xhr) => {
          xhr.setRequestHeader('X-CSRF-Token', app.token);
        };
        original(method, model, options);
      };
    })(Backbone.sync);
  }
}
