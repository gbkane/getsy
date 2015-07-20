Getsy.Collections.Carts = Backbone.Collection.extend({
  url: "/api/carts",
  model: Getsy.Models.Cart,

  getOrFetch: function (id) {
    var carts = this;
    var cart = carts.get(id);

    if(cart){
      cart.fetch();
    }else{
      cart = new Getsy.Models.Cart({id: id});
      cart.fetch({
        success: function () {
          carts.add(cart);
        }
      });
    }

    return cart;
  },

  getOrFetchOrder: function (cartId, id) {

    var cart = this.get(cartId);
    var order;

    if(cart){
      order = cart.orders().getOrFetch(id);
    }else{
      order = new Getsy.Models.order({id: id});
      order.fetch();
    }

    return order;
  }

});

Getsy.Collections.Carts = new Getsy.Collections.Carts();
