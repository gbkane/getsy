Getsy.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = options.shops;

  },

  routes: {
    "shops": "shopsIndex",
    "shops/new": "shopNew",
    "shops/:id": "shopShow",
    "shops/:id/edit": "shopEdit",
    "shops/:shop_id/items/new" : "itemNew",
    "shops/:shop_id/items/:id": "itemShow",
    "shops/:shop_id/items/:id/edit": "itemEdit"

  },

  shopsIndex: function () {

    this.collection.fetch()
    var indexView = new Getsy.Views.ShopsIndex({
      collection: this.collection
    });

    this._swapView(indexView);
  },

  shopShow: function (id) {
    var shop = this.collection.getOrFetch(id)
    var showView = new Getsy.Views.ShopShow({
      model: shop
    });

    this._swapView(showView);
  },

  shopNew: function (){
    var shop = new Getsy.Models.Shop();
    var newView = new Getsy.Views.ShopForm({
      collection: this.collection,
      model: shop
    });

    this._swapView(newView);
    this.$rootEl.prepend("<h1>Register a new shop!</h1>");
  },

  shopEdit: function (id){
    var shop = this.collection.getOrFetch(id);
    var editView = new Getsy.Views.ShopForm({
      collection: this.collection,
      model: shop
    });

    this._swapView(editView)
    this.$rootEl.prepend("<h1>Edit Your Shop</h1>");
  },

  itemShow: function (shopId, id) {

    var item = this.collection.getOrFetchItem(shopId, id)
    var showView = new Getsy.Views.ItemShow({
      model: item
    });

    this._swapView(showView);
  },

  itemNew: function (shopId) {
    var shop = this.collection.getOrFetch(shopId);
    var item = new Getsy.Models.Item();
    
    var newView = new Getsy.Views.ItemForm({
      collection: shop.items(),
      model: item
    });

    this._swapView(newView);
  },

  itemEdit: function (shopId, id) {
    var shop = this.collection.getOrFetch(shopId);
    var item = this.collection.getOrFetchItem(shopId, id)

    var showView = new Getsy.Views.ItemForm({
      collection: shop.items(),
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
