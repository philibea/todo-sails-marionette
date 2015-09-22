var app = require('../app');
var config = require('../config');

module.exports = Backbone.View.extend({
  tagName: 'form',

  className: 'form',

  attributes: {
    enctype: "application/x-www-form-urlencoded; charset=UTF-8",
    method: 'post',
    action: config.paths.todos
  },

  events: {
    'submit': 'sendForm'
  },

  template: Handlebars.compile($('#formTemplate').html()),

  initialize: function (options) {
    this.els = {};
    this.render();
  },

  render: function () {
    var html = this.template();
    this.$el.html(html);
    this.els.$textarea = this.$('textarea');

    app.views.globalView.$el.find('.form-container').html(this.el);

    this.els.$date = this.$('#datepicker').pickadate({
      format: 'dd/mm/yyyy',
      formatSubmit: 'yyyy/mm/dd',
      hiddenName: true
    });

    return this;
  },

  sendForm: function (e) {
    e.preventDefault();
    if (!this.els.$textarea.get(0).value) return false;
    var formData = this.$el.serializeArray(),
      self = this;

    $.ajaxSetup({
      beforeSend: function (xhr) {
        xhr.setRequestHeader("X-Csrf-Token", app.token);
      }
    });

    $.ajax({
      url: this.el.action,
      data: formData,
      cache: false,
      enctype: 'application/x-www-form-urlencoded; charset=UTF-8',
      method: 'POST',
      success: function (data) {
        app.collections.todos.add(data);
        self.els.$textarea.get(0).value = '';
      },
      error: function () {
        self.showError();
      }
    });
  },

  showError: function () {
    var self = this;
    this.els.$textarea.css('outline', '1px solid red');
    setTimeout(function () {
      self.els.$textarea.css('outline', '');
    }, 4000)
  }
});
