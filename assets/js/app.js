import * as Mn from 'Marionette';
import 'Radio';
import services from './services/services.js';
import controller from './controllers/app-controller.js'
import RootView from './views/root-view';

let app = new Mn.Application({
  globals: {
    KEY_ESCAPE: 27
  },
  token: $('meta[name=csrfToken]').attr('content')
});

app.on('start', () => {
  app.rootView = new RootView();
  app.rootView.render();
  Backbone.history.start({pushState: true});
});

services.init();

// ROUTER

app.router = new Mn.AppRouter({
  controller,
  appRoutes: {
    '': 'index'
  }
});
// -----



export default app;
