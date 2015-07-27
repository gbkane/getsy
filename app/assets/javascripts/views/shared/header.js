Getsy.Views.Header = Backbone.View.extend({

  initialize: function(options){
    this.listenTo(Getsy.currentUser, "signIn signOut", this.render);
    this.listenTo(Getsy.currentCart, 'sync', this.render);
    this.render();

  },

  events: {
    "click #sign-out-link": "signOut",
		"change .text-search": "search",
		},

  template: JST['shared/header'],


	search: function (event) {
		event.preventDefault();
    Getsy.query = this.$(".text-search").val();

    Backbone.history.navigate("#/search", {trigger:true});
	},

  render: function(){
    var html = this.template({ currentUser: Getsy.currentUser });
    this.$el.html(html);

    return this;
  },

  signOut: function(event){

    event.preventDefault();
    Getsy.currentUser.signOut({
      success: function(){
        Backbone.history.navigate("", { trigger: true });
      }
    });
  }

});
