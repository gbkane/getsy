Getsy.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = options.shops;

  },

  routes: {
    "shops": "shopsIndex",
    "shops/:id": "shopsShow",
    "items/:shop_id/items/:id": "itemShow"
  },

  shopsIndex: function () {
    this.collection.fetch()
    var indexView = new Getsy.Views.ShopsIndex({
      collection: this.collection
    });

    this._swapView(indexView);
  },

  shopsShow: function (id) {
    var shop = this.collection.getOrFetch(id)
    var showView = new Getsy.Views.ShopShow({
      model: shop
    });

    this._swapView(showView);
  },

  itemShow: function (shop_id, id) {
    
    var shop = this.collection.getOrFetch(shop_id)
    var item = shop.collection.getOrFetch(id)
    var showView = new Getsy.Views.ItemShow({
      model: item
    });

    this._swapView(showView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el)
    view.render();
  }
})
