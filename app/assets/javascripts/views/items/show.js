Getsy.Views.ItemShow = Backbone.View.extend({
  template: JST['items/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  events: {
    "click .add-to-cart": "addToCart"
  },

  render: function () {

    var content = this.template({
      item: this.model
    });
    this.$el.html(content)

    return this;
  },

  addToCart: function (event){
    event.preventDefault();

  }
});
