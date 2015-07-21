Getsy.Models.Shop = Backbone.Model.extend({
  urlRoot: "/api/shops",

  items: function () {
    if (!this._items) {
      this._items = new Getsy.Collections.Items([], {shop: this});
    }

    return this._items
  },

  orders: function() {
    this._orders = this._orders || new Getsy.Collections.Orders([], {});
    return this._orders;
  },

  parse: function (response) {

    if (response.items) {
      this.items().set(response.items, {parse: true});
      delete response.items;
    }

    return response;
  }
})
