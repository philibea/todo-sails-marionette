import * as Mn from 'Marionette';

var app = {
  views: {},
  models: {},
  collections: {},
  globals: {
    KEY_ESCAPE: 27
  }
};

console.log(Backbone);
console.log(_);

app.token = $('meta[name=csrfToken]').attr('content');

//var Router = require('./router/router');
//var Todos = require('./collections/Todos');
//var TodosView = require('./views/todos-view');
//var FormView = require('./views/form-view');

Backbone.sync = (function(original) {
  return function(method, model, options) {
    options.beforeSend = function(xhr) {
      xhr.setRequestHeader('X-CSRF-Token', app.token);
    };
    original(method, model, options);
  };
})(Backbone.sync);

console.log(Backbone.sync);

app.init = function () {
  // Init Router
  app.router = new Router();
  Backbone.history.start({pushState: true});
};

app.initTodos = function () {
  app.collections.todos = new Todos();
  app.collections.todos.fetch({
    success: function (collection, response) {
      app.views.todos = new TodosView({collection: collection});
    },
    error: function (collection, response) {
      console.log('Error: ', collection, response);
    }
  });
};

app.initFormView = function () {
  app.views.formView = new FormView();
};

export default app;
