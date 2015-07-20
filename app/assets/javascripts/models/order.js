Getsy.Models.Order = Backbone.Model.extend({
  urlRoot: function () {
    return 'api/carts/'+ this.get('cart_id') + '/orders';
  },
})
