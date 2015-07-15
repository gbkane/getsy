window.Getsy = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Getsy.Routers.Router({
      $rootEl: $('#main-content'),
      shops: Getsy.Collections.shops
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Getsy.initialize();
});
