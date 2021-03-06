import app from '../app.js';
import FormView from '../views/form-view.js';
import Todos from '../collections/Todos.js'
import TodosView from '../views/todos-view.js';
import TrashView from '../views/trash-view.js';

export default {

  index() {
    app.rootView.showChildView('form', new FormView());
    app.rootView.getRegion('trash').attachView(new TrashView());
    app.todos = new Todos();
    app.todosView = new TodosView();
    app.todos.fetch({
      success(col) {
        "use strict";
        app.rootView.showChildView('todos', app.todosView);
      },
      error(col, res) {
        "use strict";
        console.log('Error', res);
      }
    });
  }
};
