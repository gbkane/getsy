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
        Backbone.history.navigate("#shops", { trigger: true });
      },
      error: function(data, errors){
      
        alert(errors.responseText);
        console.log(errors.responseText);

      }
    });
  }

});
