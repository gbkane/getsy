Getsy.Views.ShopsIndex = Backbone.View.extend({
  template: JST['shops/index'],

  className: 'shops-index',

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      shops: this.collection,
    });
    this.$el.html(content);

    return this;
  }
})
