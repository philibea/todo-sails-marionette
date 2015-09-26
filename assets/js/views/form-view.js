import {templates} from '../templates.js';
import * as Mn from 'backbone.marionette';
import config from '../config.js';

export default Mn.ItemView.extend({
  tagName: 'form',

  attributes: {
    'class': 'form',
    enctype: "application/x-www-form-urlencoded; charset=UTF-8",
    method: 'post',
    action: config.paths.todos
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

  sendForm(e) {
    e.preventDefault();
    console.log('SENDING FORM', this.ui.textarea.val());
    //if (!this.els.$textarea.get(0).value) return false;
    //var formData = this.$el.serializeArray(),
    //  self = this;
    //
    //$.ajaxSetup({
    //  beforeSend: function (xhr) {
    //    xhr.setRequestHeader("X-Csrf-Token", app.token);
    //  }
    //});
    //
    //$.ajax({
    //  url: this.el.action,
    //  data: formData,
    //  cache: false,
    //  enctype: 'application/x-www-form-urlencoded; charset=UTF-8',
    //  method: 'POST',
    //  success: function (data) {
    //    app.collections.todos.add(data);
    //    self.els.$textarea.get(0).value = '';
    //  },
    //  error: function () {
    //    self.showError();
    //  }
    //});
  }
});
