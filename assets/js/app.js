import * as Mn from 'backbone.marionette';
import 'backbone.radio';
import '../components/pickadate/lib/picker.date.js';
import services from './services/services.js';
import controller from './controllers/app-controller.js';
import RootView from './views/root-view';
import {config} from './config.js';

var app = new Mn.Application({
  globals: {
    KEY_ESCAPE: 27
  },
  token: $('meta[name=csrfToken]').attr('content'),
  config
});

app.on('start', () => {

  app.todosChannel = Backbone.Radio.channel('todos');

  app.router = new Mn.AppRouter({
    controller,
    appRoutes: {
      '': 'index'
    }
  });

  app.rootView = new RootView();
  app.rootView.render();
  Backbone.history.start({pushState: true});
});

services.init();

export default app;
