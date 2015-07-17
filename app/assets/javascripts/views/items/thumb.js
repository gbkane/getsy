Getsy.Views.ItemThumb = Backbone.View.extend({
  template: JST['items/thumb'],

  initialize: function () {
    this.listenTo(this.model, 'add sync', this.render)
  },

  render: function () {
    var content = this.template({
      item: this.model
    });
    this.$el.html(content)

    return this;
  }
})
