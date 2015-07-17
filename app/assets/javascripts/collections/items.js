Getsy.Collections.Items = Backbone.Collection.extend({
  initialize: function (models, options) {
    this.shop = options.shop
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
  }

});

// Getsy.Collections.items = new Getsy.Collections.Items();
