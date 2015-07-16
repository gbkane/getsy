Getsy.Collections.Items = Backbone.Collection.extend({
  url: "/api/items",
  model: Getsy.Models.Item,

  initialize: function (models, options) {
    this.shop = options.shop
  },

  // getOrFetch: function (id) {
  //   var items = this;
  //   var item = items.get('id');
  //
  //   if(shop){
  //     item.fetch();
  //   }else{
  //     item = new Getsy.Models.Item({id: id});
  //     item.fetch({
  //       success: function () {
  //         items.add(item);
  //       }
  //     });
  //   }
  //
  //   return item;
  // }

});
