Getsy.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    shopsCollection = options.shops;

    usersCollection = new Getsy.Collections.Users();
    usersCollection.fetch();

    // cartsCollection = new Getsy.Collections.Carts();
    cart = new Getsy.Models.Cart ();
    cart.fetch();
    // cartsCollection.fetch();
  },

  routes: {

    "": "splash",
    "carts/:id": "cartShow",
    "users/new": "userNew",
    "users/:id": "userShow",
    "session/new": "signIn",
    "shops": "shopsIndex",
    "shops/new": "shopNew",
    "shops/:id": "shopShow",
    "shops/:id/edit": "shopEdit",
    "shops/:shop_id/items/new" : "itemNew",
    "shops/:shop_id/items/:id": "itemShow",
    "shops/:shop_id/items/:id/edit": "itemEdit"
  },

  splash: function (){
    var view = new Getsy.Views.Splash();
    this._swapView(view);
  },

  cartShow: function (id){
    
    var cart = Getsy.currentCart;
    cart.fetch();
    // cart.save({
    //   errors: function (data, errors){
    //     console.log(errors);
    //   }
    // });
    var view = new Getsy.Views.CartShow({

      model: cart
    });

    this._swapView(view);
  },

  userNew: function(){
    if (!this._requireSignedOut()) { return; }

    var model = new usersCollection.model();
    var formView = new Getsy.Views.UsersForm({
      collection: usersCollection,
      model: model
    });
    this._swapView(formView);
  },

  userShow: function(id){
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
      callback = callback || this._goSignIn.bind(this);
      this.signIn(callback);
      return false;
    }

    return true;
  },

  _requireSignedOut: function(callback){
    if (Getsy.currentUser.isSignedIn()) {
      callback = callback || this._goSignIn.bind(this);
      callback();
      return false;
    }

    return true;
  },

  _goSignIn: function(){
    Backbone.history.navigate("session/new", { trigger: true });
  },

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
    if (!Getsy.currentUser.isSignedIn()){
      Backbone.history.navigate("session/new", {trigger:true})
    }else{
      var shop = new Getsy.Models.Shop();
      var newView = new Getsy.Views.ShopForm({
        collection: shopsCollection,
        model: shop
      });

      this._swapView(newView);
      this.$rootEl.prepend(
        "<h1 class='form-title'>Register a new shop!</h1>"
      );
    }
  },

  shopEdit: function (id){
    var shop = shopsCollection.getOrFetch(id);
    if (Getsy.currentUser.id !== shop.get('owner_id')){
      alert("This shop does not belong to you!")
      Backbone.history.navigate(
        "shops/" + id,
        {trigger:true}
      )
    }else if (!Getsy.currentUser.isSignedIn()){
      Backbone.history.navigate("session/new", {trigger:true})
    }else{

      var editView = new Getsy.Views.ShopForm({
        collection: shopsCollection,
        model: shop
      });

      this._swapView(editView)
      this.$rootEl.prepend(
        "<h1 class='form-title'>Edit Your Shop</h1>"
      );
    }
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

    if (Getsy.currentUser.id !== shop.get('owner_id')){
      alert("This shop does not belong to you!")
      Backbone.history.navigate(
        "shops/" + shopId,
        {trigger:true}
      )
    }else if (!Getsy.currentUser.isSignedIn()){
      Backbone.history.navigate("session/new", {trigger:true})
    }else{

      var item = new Getsy.Models.Item({shop_id: shopId});

      var newView = new Getsy.Views.ItemForm({
        collection: shop.items(),
        model: item
      });
      this._swapView(newView);
      this.$rootEl.prepend(
        "<h1 class='form-title'>Register Your Item</h1>"
      );
    }
  },

  itemEdit: function (shopId, itemId) {
    var shop = shopsCollection.getOrFetch(shopId);

    if (Getsy.currentUser.id !== shop.get('owner_id')){
      alert("This item does not belong to you!")
      Backbone.history.navigate(
        "shops/" + shopId + "/items/" + itemId,
        {trigger:true}
      )
    }else if (!Getsy.currentUser.isSignedIn()){
      Backbone.history.navigate("session/new", {trigger:true})
    }else{

      var item = shopsCollection.getOrFetchItem(shopId, itemId)

      var showView = new Getsy.Views.ItemForm({
        collection: shop.items(),
        model: item
      });

      this._swapView(showView);
      this.$rootEl.prepend(
        "<h1 class='form-title'>Edit Your Item</h1>"
      );
    }

  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el)
    view.render();
  }
})
