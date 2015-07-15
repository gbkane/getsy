Getsy.Collections.Shops = Backbone.Collection.extend({
  url: "/shops",
  model: Getsy.Models.Shop,

  getOrFetch: function (id) {
    var shops = this;
    var shop = shops.get('id');

    if(shop){
      shop.fetch();
    }else{
      shop = new Getsy.Models.Shop({id: id});
      shop.fetch({
        success: function () {
          shops.add(shop);
        }
      });
    }

    return shop;
  }

});

Getys.Collections.shops = new Getsy.Collections.Shops();
