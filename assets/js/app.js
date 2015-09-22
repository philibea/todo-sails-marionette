import * as Mn from 'Marionette';
import 'Radio';
import services from './services/services.js';


var app = new Mn.Application({
  globals: {
    KEY_ESCAPE: 27
  },
  token: $('meta[name=csrfToken]').attr('content')
});

app.on('start', () => {
  Backbone.history.start();
});

services.init();

export default app;
