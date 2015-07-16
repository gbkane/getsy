Getsy.Models.Shop = Backbone.Model.extend({
  urlRoot: "/api/shops",

  items: function () {
    if (!this._items) {
      this._items = new Getsy.Collections.Items([], {shop: this});
    }

    return this._items
  },

  parse: function (response) {
    if (response.items) {
      this.items().set(response.items, {parse: true});
      delete response.items;
    }

    return payload;
  }
})
