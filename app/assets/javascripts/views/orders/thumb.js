Getsy.Views.OrderThumb = Backbone.View.extend({
  template: JST['orders/thumb'],

  className: "order-thumbs",

  initialize: function () {
    this.listenTo(this.model, 'add sync remove', this.render)
  },

  render: function () {

    var itemId = this.model.get('item_id');
    var item = Getsy.cartItems.get(itemId);
    var content = this.template({
      item: item
    });
    this.$el.html(content)

    return this;
  }
})
