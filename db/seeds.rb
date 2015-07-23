
u1 = User.create(email: 'gbkane@gmail.com', password: 'password',
  first_name: 'Greg', last_name: 'Kane', sex: 'M')
u2 = User.create(email: 'guest@example.com', password: 'password',
  first_name: 'Guest', last_name: 'Guest', sex: 'O')

u3 = User.create(email: 'swanson@pawnee.gov', password: 'password',
	first_name: 'Ron', last_name: 'Swanson', sex: 'M')

u4 = User.create(email: 'knope@pawnee.gov', password: 'password',
	first_name: 'Leslie', last_name: 'Knope', sex: 'F')

u5 = User.create(email: 'wyatt@pawnee.gov', password: 'password',
	first_name: 'Ben', last_name: 'Wyatt', sex: 'M')

u6 = User.create(email: 'ludgate@pawnee.gov', password: 'password',
	first_name: 'April', last_name: 'Ludgate', sex: 'F')

u7 = User.create(email: 'karate@pawnee.gov', password: 'password',
	first_name: 'Johnny', last_name: 'Karate', sex: 'M')

u8 = User.create(email: 'haverford@pawnee.gov', password: 'password',
	first_name: 'Tom', last_name: 'Haverford', sex: 'M')

# s1 = u1.shops.create(name: "Rare Items")
# s2 = u1.shops.create(name: "Ordinary Things Shop")
s3 = u3.shops.create(name: "Very Good Goods", description: "Hand made goods of very good quality.")
# s4 = u4.shops.create(name: "Perfect Planners", description: "Highly detailed binders for every occasion.")
s5 = u5.shops.create(name: "Dunshire Dominion", description: "Home of the Cones of Dunshire!")
s6 = u6.shops.create(name: "April's Lost and Found", description: "Repurposed things that I found.")
s7 = u7.shops.create(name: "Johnny Karate's Super Amazing Store.", description: "Karate awesomeness. Also, Burt Macklin approved gear.")
# s8 = u8.shops.create(name: "Swag", description: "You need everything I have.")



i30 = s3.items.create(name: "Very Good Chair", price: 100, qty: 1,
      main_image_url: "http://finewoodworker.com/images/gallery/classic-rocker-side_large.jpg",
      description: "It is made from wood that I chopped down.  It is a good chair.  It rocks.")
i31 = s3.items.create(name: "Very Good Canoe", price: 500, qty: 1,
      main_image_url: "http://versporttvonline.com/wp-content/uploads/balsa-wood-boat-plans-easy-diy-woodworking-projects-step-by-step-20140909104442-540eda1abc7d1.jpg",
      description: "Good for fishing, which is relaxing.")
i32 = s3.items.create(name: "Whiskey Barrel", price: 83, qty: 1,
      main_image_url: "http://www.lexingtoncontainercompany.com/publishImages/Wood-Barrels~~element61.jpg",
      description: "Oak barrels for aging whiskey. No, there is no whisky in it, but there should be.")
i33 = s3.items.create(name: "Wooden Bench", price: 300, qty: 1,
      main_image_url: "http://homeinteriorsdesigns.info/wp-content/uploads/2014/11/wood-outdoor-furniture-plans.jpg",
      description: "Two seats with separation and table for beverage, as long as that beverage is not skim milk.  Because there are only
	  two things that I hate: liers and skim milk, which is water that is lying about being milk.")
i34 = s3.items.create(name: "Emojis", price: 149 , qty: 1,
      main_image_url: "http://www.ew.com/sites/default/files/i/2014/11/13/Nick-Offerman.jpg",
      description: "These are just silly.")
i35 = s3.items.create(name: "Log Cabin", price: 20000, qty: 1,
      main_image_url: "http://tinyhousetalk.com/wp-content/uploads/tiny-log-cabin-ski-hut-1.jpg",
      description: "This is mine, but I will build you one of equal quality in one week.")

i70 = s7.items.create(name: "Johnny Karate T-shirt", price: 15, qty: 1,
      main_image_url: "https://d1sb2vhc1h1lwk.cloudfront.net/designs/135386/T-Shirt/m/0195c3/display.jpg",
      description: "Get super awesomely excited when you wear the awesome t-shirt!")
i71 = s7.items.create(name: "Kimono", price: 47, qty: 1,
      main_image_url: "http://www.kwon-danrho.cz/pool/vzor/products/clim_thumb_xxl_kimono-danrho-dojoliine-karategi-cerne-1.jpg",
      description: "Get ready to kick some serious butt with this super awesome kimono!")
i72 = s7.items.create(name: "Guitar", price: 200, qty: 1,
      main_image_url: "http://dannycenter.org/Resources/Pictures/Accoustic-Guitar.jpg",
      description: "Relax after kicking bad-guy butt with a song session on this guitar, just like Johnny Karate does!")
i73 = s7.items.create(name: "Burt Macklin Sunglasses", price: 34, qty: 1,
      main_image_url: "https://cdna.lystit.com/photos/2013/04/22/tom-ford-rose-gold-brown-adrian-aviator-sunglasses-product-1-7995826-539737166_large_flex.jpeg",
      description: "Become a true detective worthy of the FBI with these Burt Macklin shades.")

i50 = s5.items.create(name: "Cones of Dunshire T", price: 25, qty: 1,
      main_image_url: "https://img1.etsystatic.com/061/1/9230794/il_570xN.764846961_63sx.jpg",
      description: "Let everyone know how cool you are with this Cones of Dunshire T-shirt!")
i51 = s5.items.create(name: "Cones of Dunshire Board Game", price: 65, qty: 1,
      main_image_url: "https://31.media.tumblr.com/2c2253daebd286c04c0d2b68d206ef00/tumblr_inline_nc64nqs2rz1qzuc5s.jpg",
      description: "Interactive game that you and your friends will love. Spend hours together in the comfort of your parent's
	  basement.  Who will be the champion of the cones?")
i52 = s5.items.create(name: "Easy Scoring Add-on", price: 34, qty: 1,
      main_image_url: "http://freewallpaperdownloads.net/wp-content/uploads/2014/07/abacus-computer.jpg",
      description: "Keep your game running efficiently with this abacus!  Now anyone can do math.")
i53 = s5.items.create(name: "Colassal Cones", price: 29, qty: 1,
      main_image_url: "http://www.cephalofair.com/wp-content/uploads/2014/06/beginnings.jpg",
      description: "Up your game with these colassal cones. The fun will be that much bigger.")

i60 = s6.items.create(name: "Lightning in a bottle", price: 59.98,
      main_image_url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTnxJ2NdhKIhQj-0FxI7-C0b1XLbPk8dEPNNLJuZa8Y4iUsqRop",
      description: "This product is difficult to ship.")
i61 = s6.items.create(name: "Big Eyed Furball", price: 119.99,
      main_image_url: "https://s-media-cache-ak0.pinimg.com/736x/22/5d/20/225d20eaadbd3d7a3012c73e8b1119da.jpg",
      description: "Beware, it likes to eat shoe laces")
i62 = s6.items.create(name: "Giant Comb", price: 74.50,
      main_image_url: "http://images.wookmark.com/cool-stuff-bike-stand-wookmark-157185.jpg",
      description: "For that person in your life with out of control hair!")
i63 = s6.items.create(name: "Welcoming Door Knob", price: 37.64,
      main_image_url: "http://img.ffffound.com/static-data/assets/6/b43b3ad9e8d292f3351eae518413a15b7ade6b19_m.jpg",
      description: "Greet your guests without getting up.")
i64 = s6.items.create(name: "Lotus Motorcycle", price: 100000,
      main_image_url: "http://www.ebengregory.com/wp-content/uploads/2014/02/lotus-c-01-motorcycle-00-600x360.jpg",
      description: "How fast do you think it is? It's faster.")
i65 = s6.items.create(name: "Skycar", price: 200000,
      main_image_url: "http://www.comixconnection.com/uploaded_images/8_mollerb-711261.jpg",
      description: "Let us know if you survive the landing!")
i66 = s6.items.create(name: "Avocado slicer", price: 3,
      main_image_url:  "https://thechive.files.wordpress.com/2011/10/want-need-cool-stuff-3.jpg",
      description: "For the lazy chef.")

# i70 = s4.items.create(name: "", price: , qty: ,
#       main_image_url: "http://www.thefilteredlens.com/wp-content/uploads/2015/02/009386_755x422_28191_60518.jpg",
#       description: "")
# i71 = s4.items.create(name: "", price: , qty: ,
#       main_image_url: "",
#       description: "")
# i72 = s4.items.create(name: "", price: , qty: ,
#       main_image_url: "",
#       description: "")
# i73 = s4.items.create(name: "", price: , qty: ,
#       main_image_url: "",
#       description: "")
#
# i80 = s4.items.create(name: "", price: , qty: ,
#       main_image_url: "",
#       description: "")
# i81 = s4.items.create(name: "", price: , qty: ,
#       main_image_url: "",
#       description: "")
# i82 = s4.items.create(name: "", price: , qty: ,
#       main_image_url: "",
#       description: "")
# i83 = s4.items.create(name: "", price: , qty: ,
#       main_image_url: "",
#       description: "")
