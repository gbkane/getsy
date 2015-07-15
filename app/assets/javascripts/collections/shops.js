Getsy.Collections.Shops = Backbone.Collection.extend({
  url: "/shops",
  model: Getsy.Models.Shop

});

Getys.Collections.shops = new Getsy.Collections.Shops();
