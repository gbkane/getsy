# Getsy

[Heroku link][heroku]

[heroku]: http://getsy.herokuapp.com

## Minimum Viable Product
Getsy is a clone of Etsy built on Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [x] Create accounts
- [x] Create new items for sale
- [x] Create sessions (log in)
- [ ] View items for sale
- [x] View different shops
- [ ] Create shopping cart
- [ ] View shopping cart
- [ ] Checkout
- [ ] Rate items
- [ ] Rate shops
- [ ] Search for items by title
- [ ] Search for items by shop


## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, For Sale Item Creation (~1 day)


[Details][phase-one]


### Phase 2: Viewing Shops and Items (~3 days)
I will add API routes to serve shop and sale item data as JSON, then add Backbone
models and collections that fetch data from those routes. By the end of this
phase, users will be able to create items and view both shops and items, all
inside a single Backbone app. I also plan to integrate Filepicker for file upload so
users can add images to for sale items and shops. The after loggin page will combine
Shops and Items, while the before loggin will reflect the Items index.


[Details][phase-two]

## Phase 3: Editing and Displaying Carts (~1-2 days)
I will make Backbone views of the cart that can be updated as new items are
added or removed from the cart.  This will also link to a checkout page with a
dummy form that will represent what would happen at this phase minus any
payment information.


[Details][phase-three]

### Phase 4: Rating Shops and Items (~2 days)
I will have a rating form for shops and items where users can give stars and
reviews that will be part of a Backbone collection that will be held by the
item or shop. Reviews will be a subview of the item/shop.

[Details][phase-four]

### Phase 5: Searching for Shops and For sale items (~2 days)
I'll need to add `search` routes to both the Shops and Items controllers. On the
Backbone side, there will be a `SearchResults` composite view has `ShopsIndex`
and `ItemsIndex` subviews. These views will use plain old `Shops` and `Items`
collections, but they will fetch from the new `search` routes.

[Details][phase-five]

### Bonus Features (TBD)
- [ ] Follow shops
- [ ] Mailer for sign up/ password resets/ purchase confirmations
- [ ] Custom shop urls
- [ ] Categorized items with tags
- [ ] Pagination/infinite scroll
- [ ] Activity history (e.g. likes, recent searches)
- [ ] Post types (image posts, quote posts, etc)
- [ ] Comments/Likes on reviews
- [ ] Multiple sessions/session management
- [ ] User avatars
- [ ] Typeahead search bar

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
