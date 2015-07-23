Getsy.Views.CompletedCheckout = Backbone.View.extend({
  template: JST['checkout/complete'],

  render: function(){
    var content = this.template({
      cart: Getsy.currentCart
    })
    this.$el.html(content);

    return this;
  }
})
