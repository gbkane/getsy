Getsy.Views.UsersForm = Backbone.View.extend({

  initialize: function(options){
    this.listenTo(this.model, "sync change", this.render);
  },

  template: JST['users/form'],
  className: "user-form",

  events: {
    "submit form": "submit"
  },

  render: function(){
    var html = this.template({ user: this.model });
    this.$el.html(html);

    return this;
  },

  submit: function(event){
    event.preventDefault();

    var $form = $(event.currentTarget);
    var userData = $form.serializeJSON().user;
    var that = this;

    this.model.set(userData);
    this.model.save({}, {
      success: function(){
        Getsy.currentUser.fetch();
        that.collection.add(that.model, { merge: true });
        Getsy.currentUser.signIn({
          email: userData.email,
          password: userData.password,
          success: function () {
            Backbone.history.navigate("#shops", { trigger: true });
          },
          error: function(){
            alert("Wrong username/password combination. Please try again.");
          }
        });

      },
      error: function(data, errors){

        alert(errors.responseText);

      }
    });
  }

});
