var app = require('../app');
var moment = require('../../components/moment/moment');

module.exports = Backbone.View.extend({
  tagName: 'form',

  className: 'todo__form',

  events: {
    'submit': 'saveModel'
  },

  template: Handlebars.compile($('#editTemplate').html()),

  initialize: function (options) {
    this.model = options.model;
    this.actualView = options.actualView;
    this.render();
  },

  render: function () {
    var self = this;
    var html = this.template(this.model.toJSON());
    this.$el.html(html);
    var formattedDate = moment(this.model.get('date')).endOf('day').fromNow();
    this.$('.todo__date').val(formattedDate);
    this.$dateField = this.$('input.todo__date').pickadate({
      format: 'dd/mm/yyyy',
      formatSubmit: 'yyyy/mm/dd',
      hiddenName: true
    });
    app.views.globalView.$el.on({
      'click.close': function (e) {
        var $target = $(e.target);
        if ($target.get(0) !== self.$el.parents('.todo').get(0) && $target.get(0) !== self.el && $target.parents('.todo__form').get(0) !== self.el) self.returnView();
      },

      'keyup.close': function (e) {
        if (e.keyCode === app.globals.KEY_ESCAPE) self.returnView();
      }
    });

    return this;
  },

  saveModel: function (e) {
    e.preventDefault();
    var self = this;
    this.model.save({
        name: this.$('textarea[name=name]').val(),
        date: this.$('input[name=date]').val()
      },

      {
      success: function () {
        app.views.globalView.$el.off('click.close keyup.close');
        self.undelegateEvents();
        self.remove();
      },

      error: function (model, response) {
        console.log('Error while saving', response);
      },

      wait: true
    });
  },

  returnView: function () {
    app.views.globalView.$el.off('click.close keyup.close');
    this.actualView.render();
  }
});
