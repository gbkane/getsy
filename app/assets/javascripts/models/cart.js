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

  // url: function () {
  //   return "api/carts";
  // },

  // initialize: function(options) {
  //   // this.user = options.currentUser;
  // },
  //
  // shops: function() {
  //   this._shops = this._shops || new Getsy.Collections.Shops([], {});
  //   return this._shops;
  // },
  //
  // removeOrder: function(id) {
  //   this.shops().each(function(shop) {
  //     var order = shop.orders().get(id);
  //     if(order) {
  //       Getsy.cart.set('total', Getsy.cart.get('total') - order.get('total'));
  //       order.destroy({ data: { order_id: id }, processData: true });
  //       shop.orders().remove(order);
  //       if(shop.orders().length == 0)
  //         this.shops().remove(shop)
  //       this.trigger("sync");
  //     }
  //   }.bind(this));
  // },
  //
  addOrder: function(item) {
    
    var order;// = this.findOrder(item.get('id'));
    //   if(order) {
    //     //will need this later to make sure enough in stock
    //     // if(order.get('total') + 1 > item.get('available'))
    //     //   return;
    //     order.set('total', order.get('total') + 1);
    //     order.save({ data: { item_id: item.get('id') } });
    //   } else {
        order = new Getsy.Models.Order({ total: 1, item: item });
        order.save({ data: { item_id: item.get('id') } });

  //
    this.set('total', this.get('total') + 1);
    // this.save({},{
    //   success: function () {
    //     alert("Item added to your cart!");
    //   }
    // });
  //
  }
  //
  // removeShop: function(id) {
  //   var shop = this.shops().get(id);
  //   var numOrders = 0;
  //   shop.orders().each(function(order) {
  //     numOrders += order.get('total');
  //   });
  //   shop.orders().pop().destroy({ data: { shop_id: id }, processData: true });
  //   this.shops().remove(shop);
  //   this.set('total', this.get('total') - numOrders);
  //   this.trigger("sync");
  // },
  //
  // findOrder: function(itemId) {
  //   var order;
  //   this.shops().each(function(shop) {
  //     shop.orders().each(function(currentOrder) {
  //       if(currentOrder.item().get('id') == itemId)
  //         order = currentOrder;
  //     });
  //   });
  //   return order;
  // },
  //
  // parse: function(data) {
  //   if(data.shops) {
  //     this.shops().set(data.shops, { parse: true });
  //     delete data.shops;
  //   }
  //   return data;
  // }
});
