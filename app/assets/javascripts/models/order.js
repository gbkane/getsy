Getsy.Models.Order = Backbone.Model.extend({
  urlRoot: function () {
    debugger
    // return 'api/carts/'+ this.get('cart_id') + '/orders';
    return 'api/orders';
  },
  initialize: function(options) {
    if(options.item) {
      this._item = options.item;
      this.total = options.total;
    }
  },

  item: function() {
    this._item = this._item || new Getsy.Models.Item();
    return this._item
  },

  handleQty: function () {

  },

  parse: function(data) {
    if(data.item) {
      var itemParams = this.item().parse(data.item);
      this.item().set(itemParams);
      delete data.item;
    }
    return data;
  }
})
