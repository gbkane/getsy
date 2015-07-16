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
      main_image_url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTnxJ2NdhKIhQj-0FxI7-C0b1XLbPk8dEPNNLJuZa8Y4iUsqRop")
i2 = s2.items.create(name: "English Muffin", price: 3,
      main_image_url:  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQaYQzbfuVp37s9Cp9bO-3Jgkg1MINaS9d8shKObg_ESQgs5cqwmQ")
