Getsy.Views.Footer = Backbone.View.extend({

  initialize: function(options){
    // this.listenTo(Getsy.currentUser, "signIn signOut", this.render);
    this.render();
  },


  events: {
    "click #add-shop-link": "addShop"
  },

  template: JST['shared/footer'],

  render: function(){
    var content = this.template();
    this.$el.html(content);

    return this;
  },

  addShop: function () {
    if(this.model.isSignedIn){
      Backbone.history.navigate("#/shops/new")
    }else{
      Backbone.history.navigate("#/session/new")
    }
  }

});
