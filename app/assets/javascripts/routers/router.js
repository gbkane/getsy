Getsy.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    shopsCollection = options.shops;
    usersCollection = new Getsy.Collections.Users();
    usersCollection.fetch();
    // itemsCollection = options.items;
  },

  routes: {
    // "items": "itemsIndex",
    "": "index",
    "users/new": "new",
    "users/:id": "show",
    "session/new": "signIn",
    "shops": "shopsIndex",
    "shops/new": "shopNew",
    "shops/:id": "shopShow",
    "shops/:id/edit": "shopEdit",
    "shops/:shop_id/items/new" : "itemNew",
    "shops/:shop_id/items/:id": "itemShow",
    "shops/:shop_id/items/:id/edit": "itemEdit"

  },


  index: function(){
      var callback = this.index.bind(this);
      if (!this._requireSignedIn(callback)) { return; }

      var indexView = new Getsy.Views.UsersIndex({
        collection: usersCollection
      });
      this._swapView(indexView);
    },

    new: function(){
    if (!this._requireSignedOut()) { return; }

    var model = new usersCollection.model();
    var formView = new Getsy.Views.UsersForm({
      collection: usersCollection,
      model: model
    });
    this._swapView(formView);
  },

  show: function(id){
    var callback = this.show.bind(this, id);
    if (!this._requireSignedIn(callback)) { return; }

    var model = usersCollection.getOrFetch(id);
    var showView = new Getsy.Views.UsersShow({
      model: model
    });
    this._swapView(showView);
  },

  signIn: function(callback){
    if (!this._requireSignedOut(callback)) { return; }

    var signInView = new Getsy.Views.SignIn({
      callback: callback
    });
    this._swapView(signInView);
  },

  _requireSignedIn: function(callback){
    if (!Getsy.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      this.signIn(callback);
      return false;
    }

    return true;
  },

  _requireSignedOut: function(callback){
    if (Getsy.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      callback();
      return false;
    }

    return true;
  },

  _goHome: function(){
    Backbone.history.navigate("", { trigger: true });
  },
  // itemsIndex: function () {
  //   itemsCollection.fetch();
  //   var indexView = new Getsy.Views.ItemsIndex({
  //     collection: itemsCollection
  //   });
  //
  //   this._swapView(indexView);
  // },

  shopsIndex: function () {

    shopsCollection.fetch()
    var indexView = new Getsy.Views.ShopsIndex({
      collection: shopsCollection
    });

    this._swapView(indexView);
  },

  shopShow: function (id) {
    var shop = shopsCollection.getOrFetch(id)
    var showView = new Getsy.Views.ShopShow({
      model: shop
    });

    this._swapView(showView);
  },

  shopNew: function (){
    var shop = new Getsy.Models.Shop();
    var newView = new Getsy.Views.ShopForm({
      collection: shopsCollection,
      model: shop
    });

    this._swapView(newView);
    this.$rootEl.prepend(
      "<h1 class='form-title'>Register a new shop!</h1>"
    );
  },

  shopEdit: function (id){
    var shop = shopsCollection.getOrFetch(id);
    var editView = new Getsy.Views.ShopForm({
      collection: shopsCollection,
      model: shop
    });

    this._swapView(editView)
    this.$rootEl.prepend(
      "<h1 class='form-title'>Edit Your Shop</h1>"
    );
  },

  itemShow: function (shopId, itemId) {

    var item = shopsCollection.getOrFetchItem(shopId, itemId)
    var showView = new Getsy.Views.ItemShow({
      model: item
    });

    this._swapView(showView);
  },

  itemNew: function (shopId) {
    var shop = shopsCollection.getOrFetch(shopId);
    var item = new Getsy.Models.Item({shop_id: shopId});

    var newView = new Getsy.Views.ItemForm({
      collection: shop.items(),
      model: item
    });

    this._swapView(newView);
    this.$rootEl.prepend(
      "<h1 class='form-title'>Register Your Item</h1>"
    );
  },

  itemEdit: function (shopId, itemId) {
    var shop = shopsCollection.getOrFetch(shopId);
    var item = shopsCollection.getOrFetchItem(shopId, itemId)

    var showView = new Getsy.Views.ItemForm({
      collection: shop.items(),
      model: item
    });

    this._swapView(showView);
    this.$rootEl.prepend(
      "<h1 class='form-title'>Edit Your Item</h1>"
    );
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el)
    view.render();
  }
})
