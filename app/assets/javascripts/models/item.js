Getsy.Models.Item = Backbone.Model.extend({
  urlRoot: function () {
    return 'api/shops/'+ this.get('shop_id') + '/items';
  },
})
