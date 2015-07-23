Getsy.Views.CartShow = Backbone.CompositeView.extend({
  template: JST['carts/show'],

  events: {
    "click .remove-item": "removeOrder"
  },

  initialize: function () {

    this.collection = this.model.orders()

    this.listenTo(this.model, 'sync', this.render)
    this.listenTo(this.collection, 'add', this.addOrder);
    this.listenToOnce(this.collection, 'remove', this.removeOrder);
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

    var view = new Getsy.Views.OrderThumb({
      model: order
    });
    this.addSubview('#orders', view);
  },

  removeOrder: function (event){
    console.log('remove order');

    var view = $(event.currentTarget);
    var orderViews = $('.order');
    var that = this;
    var orderId = view.data('order-id')

    // this.removeSubiew('#orders', orderViews.first());
    orderViews.first().remove();
    var order = Getsy.currentCart.orders().get(orderId);
    if(order){
      order.destroy({
        success: function () {
          that.render();
        }
      });
    }
    // orderViews.forEach(function (orderView){
    //   debugger
    //   if ( orderId === orderView.data('order-id')){
    //     that.removeSubiew('#orders', orderView);
    //     var order = Getsy.currentCart.orders().get(orderId);
    //     order.destroy({
    //       success: function () {
    //         that.render();
    //       }
    //     });
    //   }
    // })
    var orderId = view.data('order-id');
    // var order = this.collection.get(orderId);
    // order.destroy();


      if(order){

      }
    this.removeSubview('#orders', view);
  },

  renderOrders: function () {
    this.model.orders().each(this.addOrder.bind(this));
  }


});
