var _ = require('lodash');
/**
 * TodoController
 *
 * @description :: Server-side logic for managing todoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  getAll: function (req, res) {
    Todo.find().where({'userId': req.session.user.auth.id}).exec(function (err, todos) {
      if (err) throw err;
      res.json(todos);
    });
  },

  create: function (req, res) {
    req.body.userId = req.session.user.auth.id;
    req.body.completed = false;
    if (!req.body.date) req.body.date = new Date(Date.now() + 1000*60*60*24);
    Todo.create(req.body, function (err, todo) {
      if (err) throw err;
      res.json(todo);
    });
  },

  destroy: function (req, res) {
    Todo.destroy(req.param('todoId')).exec(function (err, todo) {
      if (err) throw err;
      res.json(todo);
    });
  },

  update: function (req, res) {
    if (req.body.userId !== req.session.user.auth.id) return res.send("This todo can't be edited");
    req.body.date = new Date(req.body.date).toISOString();
    Todo.update({id: req.body.id}, _.omit(req.body, ['userId', 'createdAt', 'id'])).exec(function (err, todo) {
      if (err) throw err;
      res.json(todo);
    });
  }
};

