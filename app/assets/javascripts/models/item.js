Getsy.Models.Item = Backbone.Model.extend({
  urlRoot: function () {
    return 'api/shops/'+ this.get('shop_id') + '/items';
  },

  shop: function () {

  },

  items: function () {
    if (!this._items) {
      this._items = new Getsy.Collections.Items([], {shop: this});
    }

    return this._items
  },

})
