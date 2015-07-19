# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
u1 = User.create(email: 'gbkane@gmail.com', password: 'password',
  fname: 'Greg', lname: 'Kane', sex: 'M')
u2 = User.create(email: 'guest@example.com', password: 'password',
  fname: 'Guest', lname: 'Guest', sex: 'O')

s1 = u1.shops.create(name: 'Cool Things Shop')
s2 = u1.shops.create(name: 'Ordinary Things Shop')

i1 = s1.items.create(name: "Lightning in a bottle", price: 59.98,
      main_image_url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTnxJ2NdhKIhQj-0FxI7-C0b1XLbPk8dEPNNLJuZa8Y4iUsqRop",
      description: "This product is difficult to ship.")

i2 = s1.items.create(name: "Big Eyed Furball", price: 119.99,
      main_image_url: "https://s-media-cache-ak0.pinimg.com/736x/22/5d/20/225d20eaadbd3d7a3012c73e8b1119da.jpg",
      description: "Beware, it likes to eat shoe laces")

i3 = s1.items.create(name: "Giant Comb", price: 74.50,
      main_image_url: "http://images.wookmark.com/cool-stuff-bike-stand-wookmark-157185.jpg",
      description: "For that person in your life with out of control hair!")

i4 = s1.items.create(name: "Welcoming Door Knob", price: 37.64,
      main_image_url: "http://img.ffffound.com/static-data/assets/6/b43b3ad9e8d292f3351eae518413a15b7ade6b19_m.jpg",
      description: "Greet your guests without getting up.")

i5 = s1.items.create(name: "Lotus Motorcycle", price: 100000,
      main_image_url: "http://www.ebengregory.com/wp-content/uploads/2014/02/lotus-c-01-motorcycle-00-600x360.jpg",
      description: "How fast do you think it is? It's faster.")

i6 = s1.items.create(name: "Skycar", price: 200000,
      main_image_url: "http://www.comixconnection.com/uploaded_images/8_mollerb-711261.jpg",
      description: "Let us know if you survive the landing!")


i7 = s2.items.create(name: "Avocado slicer", price: 3,
      main_image_url:  "https://thechive.files.wordpress.com/2011/10/want-need-cool-stuff-3.jpg",
      description: "For the lazy chef.")
