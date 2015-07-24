// Getsy.Views.ItemsIndex = Backbone.View.extend({
//   template: JST['items/index'],
//
//   className: 'items-index',
//
//   initialize: function () {
//     this.listenTo(this.collection, 'sync', this.render);
//   },
//
//   render: function () {
//     var content = this.template({
//       items: this.collection
//     });
//     this.$el.html(content);
//
//     return this;
//   }
// })

Getsy.Views.ItemsIndex = Backbone.CompositeView.extend({
  template: JST['items/index'],

  initialize: function () {

    this.listenTo(this.collection, 'add', this.addItem);
  },

  render: function () {

    var content = this.template({
      item: this.model
    });
    this.$el.html(content)
    this.renderItems();

    return this;
  },

  addItem: function (item){

    var view = new Getsy.Views.ItemThumb({
      model: item
    });
    this.addSubview('#/items', view)
  },

  renderItems: function () {
    this.collection.each(this.addItem.bind(this));
  }
});
