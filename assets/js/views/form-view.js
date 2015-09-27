import {templates} from '../templates.js';
import * as Mn from 'backbone.marionette';
import app from '../app.js';

let FormView = Mn.ItemView.extend({
  tagName: 'form',

  attributes: {
    'class': 'form',
    enctype: "application/x-www-form-urlencoded; charset=UTF-8",
    method: 'post',
    action: function () {
      return app.config.paths.todos
    }
  },

  template: templates['form-template'],

  ui: {
    textarea: 'textarea',
    picker: '#datepicker'
  },

  events: {
    submit: 'sendForm',
    'input @ui.textarea': 'text'
  },

  initialize() {
    "use strict";

  },

  onRender() {
    "use strict";
    this.ui.picker.pickadate({
      format: 'dd/mm/yyyy',
      formatSubmit: 'yyyy/mm/dd',
      hiddenName: true
    });
  },

  sendForm(e) {
    e.preventDefault();

    if (!this.ui.textarea.val()) return false;

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
        app.todos.add(data);
        self.ui.textarea.val('');
      },
      error: function () {
        self.showError();
      }
    });
  },

  showError() {
    "use strict";
    var self = this;
    this.ui.textarea.css('outline', '1px solid red');
    setTimeout(function () {
      self.ui.textarea.css('outline', '');
    }, 4000)
  }
});

export default FormView;
