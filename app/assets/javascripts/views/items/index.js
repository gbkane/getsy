Getsy.Views.ItemsIndex = Backbone.View.extend({
  template: JST['items/index'],

  className: 'items-index',

  initialize: function () {
    this.listenTo(this.collection, 'add remove change', this.render);
  },

  render: function () {
    var content = this.template({
      items: this.collection
    });
    this.$el.html(content);

    return this;
  }
})