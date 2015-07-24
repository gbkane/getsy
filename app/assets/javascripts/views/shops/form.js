Getsy.Views.ShopForm = Backbone.View.extend({
  template: JST['shops/form'],
  tagName: 'form',
  className: 'shops-form',

  events: {
    "click .submit": "submit"
  },

  initialize: function (){
    this.listenTo(this.model, 'sync', this.render)
  },

  render: function () {
    var content = this.template({
      shop: this.model
    });
    this.$el.html(content);

    return this;
  },

  submit: function (event) {

    event.preventDefault();
    var that = this;

    var attrs = this.$el.serializeJSON();
    this.model.set(attrs);
    this.model.save({}, {
      success: function () {
        that.collection.add(that.model, {merge: true});
        Backbone.history.navigate("#/shops/" + that.model.id, {trigger: true});
      }
    });
  }
})
