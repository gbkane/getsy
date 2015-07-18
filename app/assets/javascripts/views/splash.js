Getsy.Views.Splash = Backbone.View.extend({
  template: JST['splash'],

  initialize: function () {
    this.render();
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }


})
