Getsy.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = options.shops;

  },

  routes: {
    "shops": "shopsIndex",
    "shops/:id": "shopsShow"
  },

  shopsIndex: function () {

    this.collection.fetch()
    console.log("fetched shops collection");
    var indexView = new Getsy.Views.ShopsIndex({
      collection: this.collection
    });

    this._swapView(indexView);
  },

  shopsShow: function (id) {
    var shop = this.collection.getOrFetch(id)
    debugger
    var showView = new Getsy.Views.ShopShow({
      model: shop
    });

    this._swapView(showView);
  },

  _swapView: function (view) {
    console.log("swapping view");

    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el)
    view.render();

  }
})
