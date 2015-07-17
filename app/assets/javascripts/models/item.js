Getsy.Models.Item = Backbone.Model.extend({
  urlRoot: function () {
    debugger
    return 'api/shops/'+ this.get('shop_id') + '/items';
  },
})
