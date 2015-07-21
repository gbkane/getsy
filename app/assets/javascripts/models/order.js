Getsy.Models.Order = Backbone.Model.extend({
  urlRoot: function () {
    return 'api/carts/'+ this.get('cart_id') + '/orders';
  },
  initialize: function(options) {
    if(options.item) {
      this._item = options.item;
      this.total = options.total;
    }
  },

  item: function() {
    this._item = this._item || new Getsy.Models.Item({}, {});
    return this._item
  },

  // parse: function(data) {
  //   if(data.item) {
  //     var itemParams = this.item().parse(data.item);
  //     this.item().set(itemParams);
  //     delete data.item;
  //   }
  //   return data;
  // }
})
