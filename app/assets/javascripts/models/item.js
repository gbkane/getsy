Getsy.Models.Item = Backbone.Model.extend({
  urlRoot: function () {
    debugger
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
//this probably belongs somewhere else
  // defaults : {
  //   'price': 1,
  //   'qty': 1,
  //   'total': 1
  // },
  //
  // total: function () {
  //   var total = this.get('price') * this.get('qty')
  //   this.set('total', total);
  //   return total;
  // },
  //
  // quantity: function ( type ) {
  //   var qty = this.get('qty');
  //   this.set('qty', (type === 'increase' ? ++qty : --qty));
  // }


})
