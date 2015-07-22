Getsy.Views.CartedItemView = Backbone.View.extend({
  tagName: 'tr',
  template: JST['items/carted'],

  events: {
    "click .remove": "remove",
    "click .quantity": "manageQuantity"
  },

  initialize: function () {
    this.render();

    this.listenTo(this.model, 'change', this.render);
  },

  render: function () {
    var content = this.template({
      item: this.model
    });
    this.$el.html(content);

    return this;
  },

  manageQuantity: function (event) {
    var type = $(event.target).data('type');
    if (this.model.get('qty') === 1 && type === 'decrease'){
      this.remove();
    }else{
      this.model.quantity(type);
    }
  },

  remove: function () {
    this.$el.fadeOut(500, function (){
      $(this).remove();
    });

    Getsy.cartItems.remove()
  }
})
