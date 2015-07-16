Getsy.Collections.Shops = Backbone.Collection.extend({
  url: "/api/shops",
  model: Getsy.Models.Shop,

  getOrFetch: function (id) {
    var shops = this;
    var shop = shops.get(id);

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
  },

  getOrFetchItem: function (shopId, id) {
    debugger
    var shop = this.get(shopId);
    var item;

    if(shop){
      item = shop.items().getOrFetch(id);
    }else{
      item = new Getsy.Models.Item({id: id});
      item.fetch();
    }

    return item;
  }

});

Getsy.Collections.shops = new Getsy.Collections.Shops();
