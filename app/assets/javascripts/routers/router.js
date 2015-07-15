Getsy.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = options.shops;
  },

  routes: {
    "": "index"
  },

  shopsIndex: function () {
    this.collection.fetch()
    var indexView = new Getsy.Views.ShopsIndex({
      collection: this.collection
    });

    this._swapView(indexView);
  },
  _swapView: function (view) {
    this._currentView && this._currentView.Remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el)
  }
})
