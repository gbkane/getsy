Getsy.Views.ItemForm = Backbone.View.extend({
  template: JST['items/form'],
  tagName: 'form',
  className: 'items-form',

  events: {
    "click .submit": "submit"
  },

  initialize: function (){
    this.listenTo(this.model, 'sync', this.render)
  },

  render: function () {
    var content = this.template({
      item: this.model
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
        Backbone.history.navigate(
          "/shops/"+ that.model.get("shop_id"),
          {trigger: true}
        );
      }
    });
  }
})
