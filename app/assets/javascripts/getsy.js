window.Getsy = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.currentUser = new Getsy.Models.CurrentUser();
    this.currentUser.fetch();
    new Getsy.Routers.Router({
      $rootEl: $('#main-content'),
      shops: Getsy.Collections.shops
      // items: Getsy.Collections.items
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Getsy.initialize();
});
