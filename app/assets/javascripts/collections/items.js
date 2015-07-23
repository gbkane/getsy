Getsy.Collections.Items = Backbone.Collection.extend({
  initialize: function (models, options) {
    // this.shop = options.shop
  },

  url: function () {
    return 'api/shops/'+ this.get('shop_id') + '/items'
  },

  model: Getsy.Models.Item,

  getOrFetch: function (id) {
    var items = this;
    var item = items.get('id');

    if(item){
      item.fetch();
    }else{
      item = new Getsy.Models.Item({id: id});
      item.fetch({
        success: function () {
          items.add(item);
        }
      });
    }

    return item;
  },

  // subtotal: function () {
  //   var total = 0;
  //
  //   this.each( function(model) {
  //     total += model.total();
  //   })
  //
  //   return total.toFixed(2);
  // }

});

// Getsy.Collections.items = new Getsy.Collections.Items();
Getsy.cartItems = new Getsy.Collections.Items();
