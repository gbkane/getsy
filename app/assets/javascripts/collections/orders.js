Getsy.Collections.Orders = Backbone.Collection.extend({
  initialize: function (models, options) {
    this.cart = options.cart
  },

  // model: Getsy.Models.Order,
  //
  // getOrFetch: function (id) {
  //   var orders = this;
  //   var order = orders.get('id');
  //
  //   if(order){
  //     order.fetch();
  //   }else{
  //     order = new Getsy.Models.Order({id: id});
  //     order.fetch({
  //       success: function () {
  //         orders.add(order);
  //       }
  //     });
  //   }
  //
  //   return order;
  // }
  url: 'api/orders',

  model: Getsy.Models.Order,

//Add parse function to remove item from order

});
