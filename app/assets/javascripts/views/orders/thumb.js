Getsy.Views.OrderThumb = Backbone.View.extend({
  template: JST['orders/thumb'],

  className: "order-thumbs",

  initialize: function () {
    this.listenTo(this.model, 'add sync', this.render)
  },

  render: function () {
    var content = this.template({
      item: this.model
    });
    this.$el.html(content)

    return this;
  }
})
