Getsy.Views.ItemThumb = Backbone.View.extend({
  template: JST['items/thumb'],

  initialize: function () {
    this.listenTo(this.model, 'add', this.render)
  },

  render: function () {
    var content = this.template({
      shop: this.model
    });
    this.$el.html(content)

    return this;
  }
})