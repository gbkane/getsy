Getsy.Models.Item = Backbone.Model.extend({
  urlRoot: function () {
    return this.collection.shop.url() + '/items'
  },
})
