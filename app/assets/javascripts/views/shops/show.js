Getsy.Views.ShopShow = Backbone.CompositeView.extend({
  template: JST['shops/show'],

  className: 'container',

  initialize: function () {
    this.collection = this.model.items()
    this.listenTo(this.model, 'sync', this.render)
    this.listenTo(this.collection, 'add', this.addItem);
  },

  render: function () {
    var content = this.template({
      shop: this.model
    });
    this.$el.html(content)
    this.renderItems();

    return this;
  },

  addItem: function (item){

    var view = new Getsy.Views.ItemThumb({
      model: item
    });
    this.addSubview('#items', view)
  },

  renderItems: function () {
    this.model.items().each(this.addItem.bind(this));
  }
});
