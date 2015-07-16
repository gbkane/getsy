Getsy.Views.ShopsIndex = Backbone.View.extend({
  template: JST['shops/index'],

  className: 'shops-index',

  initialize: function () {
    this.listenTo(this.collection, 'add remove change', this.render);
  },

  render: function () {
    var content = this.template({
      shops: this.collection
    });
    console.log("backbone index view");
    this.$el.html(content);

    return this;
  }
})
