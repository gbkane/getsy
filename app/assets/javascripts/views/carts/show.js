Getsy.Views.CartShow = Backbone.CompositeView.extend({
  template: JST['carts/show'],

  initialize: function () {
    this.collection = this.model.orders()
    this.listenTo(this.model, 'sync', this.render)
    this.listenTo(this.collection, 'add', this.addOrder);
  },

  render: function () {
    var content = this.template({
      shop: this.model
    });
    this.$el.html(content)
    this.renderOrders();

    return this;
  },
  addOrder: function (order){

    var view = new Getsy.Views.OrderThumb({
      model: order
    });
    this.addSubview('#orders', view);
  },

  renderOrders: function () {
    this.model.orders().each(this.addOrder.bind(this));
  }

})
