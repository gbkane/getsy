window.Getsy = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.currentUser = new Getsy.Models.CurrentUser();
    this.currentUser.fetch();
    // this.cart = new Getsy.Models.Carts();
    // this.cart.fetch();
    this.header = new Getsy.Views.Header({ el: "#header" });
    this.footer = new Getsy.Views.Footer({ el: "#footer" });
    new Getsy.Routers.Router({
      $rootEl: $('#main-content'),
      shops: Getsy.Collections.shops
    });
    Backbone.history.start();
  }
};
