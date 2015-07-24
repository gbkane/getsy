Getsy.Views.ItemThumb = Backbone.View.extend({
  template: JST['items/thumb'],

  className: "thumb",

  initialize: function () {
    this.listenTo(this.model, 'add sync', this.render)
  },

  render: function () {
    var content = this.template({
      shop: this.collection,
      item: this.model
    });
    this.$el.html(content)
    
    return this;
  }
})
