import app from '../app.js';
import FormView from '../views/form-view.js';
import TodosView from '../views/todos-view.js';

export default {

  index() {
    app.rootView.showChildView('form', new FormView());
    app.rootView.showChildView('todos', new TodosView());
  }
};
