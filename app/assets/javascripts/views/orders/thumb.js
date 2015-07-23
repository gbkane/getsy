Getsy.Views.OrderThumb = Backbone.View.extend({
  template: JST['orders/thumb'],

  className: "order-thumbs group",

  initialize: function () {
    this.listenTo(this.model, 'add sync remove', this.render)
  },

  render: function () {
    var content = this.template({
      order: this.model
    });
    this.$el.html(content)

    return this;
  }
})
