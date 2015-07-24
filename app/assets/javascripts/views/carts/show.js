Getsy.Views.CartShow = Backbone.CompositeView.extend({
  template: JST['carts/show'],

  events: {
    "click .remove-item": "removeOrder",
    "click .checkout": "checkout"
  },

  initialize: function () {

    this.collection = this.model.orders()
    this.listenTo(this.model, 'sync change', this.render)
    this.listenTo(this.collection, 'add', this.addOrder);
    this.listenTo(this.collection, 'remove', this.removeOrder);
  },

  render: function () {

    var content = this.template({
      cart: this.model
    });
    this.$el.html(content)
    this.renderOrders();

    return this;
  },
  addOrder: function (order){
    // console.log('adding item')
    var view = new Getsy.Views.OrderThumb({
      model: order
    });

    this.addSubview('#orders', view);
  },

  removeOrder: function (event){
    // console.log('remove order');
    var view = $(event.currentTarget);
    var orderViews = $('.order');
    var that = this;
    var orderId = view.data('order-id')



    // this.removeSubiew('#orders', orderViews.first());
    orderViews.first().remove();
    var order = Getsy.currentCart.orders().get(orderId);
    var total = Getsy.currentCart.get('total');

    //   total -= order.get('price');
    //
    // Getsy.currentCart.set({total: total});
    if(order){
      total -= order.get('price');

    Getsy.currentCart.set({total: total});
      order.destroy({
        success: function () {
          that.render();
        }
      });
    }

    var orderId = view.data('order-id');
    this.removeSubview('#orders', view);
  },

  renderOrders: function () {
    // debugger
    this.model.orders().each(this.addOrder.bind(this));
    var total = 0;
    this.model.orders().each( function (order){
      total += order.get('price');
    })
    this.model.set({total: total});

  },

  checkout: function () {
    Backbone.history.navigate("#/checkout", {trigger:true})
  }


});
