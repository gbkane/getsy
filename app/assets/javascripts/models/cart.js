Getsy.Models.Cart = Backbone.Model.extend({
  urlRoot: "/api/carts",

  orders: function () {
    if (!this._orders) {
      this._orders = new Getsy.Collections.Orders([], {cart: this});
    }

    return this._orders
  },

  addOrder: function(item) {

    var order;// = this.findOrder(item.get('id'));
    debugger
    order = new Getsy.Models.Order({item: item });
    order.save({ data: { item_id: item.get('id') } });
  },

  parse: function (response) {

    if (response.orders) {
      this.orders().set(response.orders, {parse: true});
      delete response.orders;
    }

    return response;
  }

});
