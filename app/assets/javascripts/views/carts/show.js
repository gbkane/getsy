Getsy.Views.CartShow = Backbone.CompositeView.extend({
  template: JST['carts/show'],
  //
  // events: {
  //   "click .remove-order": "removeOrder"
  // },
  //
  initialize: function () {

    this.collection = this.model.orders()

    this.listenTo(this.model, 'sync', this.render)
    this.listenTo(this.collection, 'add', this.addOrder);
    this.listenTo(this.collection, 'remove', this.removeOrder);
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

  removeOrder: function (event){
    var view = $(event.currentTarget);
    this.removeSubview('#orders', view);
  },

  renderOrders: function () {
    this.model.orders().each(this.addOrder.bind(this));
  }


});
