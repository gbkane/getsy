Getsy.Views.CartShow = Backbone.CompositeView.extend({
  template: JST['carts/show'],

  events: {
    "click .remove-item": "removeOrder"
  },

  initialize: function () {
debugger
    this.collection = this.model.orders()

    this.listenTo(this.model, 'sync', this.render)
    this.listenTo(this.collection, 'add', this.addOrder);
    this.listenTo(this.collection, 'remove', this.removeOrder);
  },

  render: function () {
    var content = this.template({
      order: this.model
    });
    this.$el.html(content)
    this.renderOrders();

    return this;
  },
  addOrder: function (order){

    var view = new Getsy.Views.OrderThumb({
      model: order
    });
    this.addSubview('#orders', view);
  },

  removeOrder: function (event){
    debugger
    var view = $(event.currentTarget);
    var orderId = view.data('order-id');
    // var order = this.collection.get(orderId);
    // order.destroy();

    var order = Getsy.currentCart.orders().get(orderId);
      if(order){
        order.destroy();
      }
    this.removeSubview('#orders', view);
  },

  renderOrders: function () {
    this.model.orders().each(this.addOrder.bind(this));
  }


});
