Getsy.Models.Cart = Backbone.Model.extend({
  urlRoot: "/api/carts",

  orders: function () {
    if (!this._orders) {
      this._orders = new Getsy.Collections.Orders([], {cart: this});
    }

    return this._orders
  },

  parse: function (response) {

    if (response.orders) {
      this.orders().set(response.orders, {parse: true});
      delete response.orders;
    }

    return response;
  },

  addOrder: function(item) {

    var order;// = this.findOrder(item.get('id'));

    order = new Getsy.Models.Order({item: item });
    order.save({ data: { item_id: item.get('id') } });

    // debugger
    // if (Getsy.currentCart.orders().models > 0){
    //
    // // }else{
    //   Getsy.currentCart.orders().models.forEach (function (existingOrder){
    //     if(item.id === existingOrder.get('item_id')){
    //       existingOrder.set('num_units', existingOrder.get('num_units') + 1);
    //       existingOrder.save()
    //     }else{
    //       order = new Getsy.Models.Order({ total: 1, item: item });
    //       order.save({ data: { item_id: item.get('id') } });
    //     }
    //   });

    // this.save({},{});


  }

});
