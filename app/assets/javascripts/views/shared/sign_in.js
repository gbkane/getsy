Getsy.Views.SignIn = Backbone.View.extend({

  initialize: function(options){
    this.callback = options.callback;
    this.listenTo(Getsy.currentUser, "signIn", this.signInCallback);
  },

  className: 'user-form',

  events: {
    "submit form": "submit",
    "click .guest-sign-in": "signInAsGuest",
  },

  template: JST['shared/sign_in'],

  render: function(){
    this.$el.html(this.template());

    return this;
  },

  submit: function(event){
    event.preventDefault();
    var $form = $(event.currentTarget);
    var formData = $form.serializeJSON().user;

    Getsy.currentUser.signIn({
      email: formData.email,
      password: formData.password,
      error: function(){
        alert("Wrong username/password combination. Please try again.");
      }
    });
  },

  signInAsGuest: function (event) {
    event.preventDefault();
    Getsy.currentUser.signIn({
      email: 'guest@example.com',
      password: 'password'
    });
  },

  signInCallback: function(event){
    if(this.callback) {
      this.callback();
    } else {
      Backbone.history.navigate("#/shops", { trigger: true });
    }
  }

});
