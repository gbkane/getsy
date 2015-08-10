# Getsy 
### [See it live!][heroku]

[heroku]: http://www.getsy.site

Welcome to Getsy, a marketplace for handmade goods inspired by Etsy.

Navigate through the site with or without signing in.  In order to
access adding a shop or items, however, you will need to be logged in.  
If you are just checking things out, I have provided a guest login.  
You will have access to the Guest Shop's edit and create forms.  You
may also create a brand new shop and list items for sale.  

### About
* Single-page Backbone app consuming RESTful JSON Rails API
* Custom authentication using BCrypt overrides User#password= method to store secret hash instead of plain text
* Log in with Twitter via Omniauth
* Searchable from header on Shops and Items by name and description
* Form inputs for creating and editing shops and items for sale
* Checkout brings up a dummy screen of "order placed"

### To Do
This is a work in progress. Moving forward I would like to incorporate
the following:
- [ ] Add quantity control to cart and items
- [ ] Follow shops
- [ ] Mailer for sign up/ password resets/ purchase confirmations
- [ ] Custom shop urls
- [ ] Categorized items with tags
- [ ] Pagination/infinite scroll
- [ ] Activity history (e.g. likes, recent searches)
- [ ] Comments/Likes on reviews
- [ ] User avatars
- [ ] More robust searches
