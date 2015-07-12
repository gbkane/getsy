# Schema Information

## carts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)

## orders
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
cart_id     | integer   | not null, foreign key (references carts)
item_id     | integer   | not null, foreign key (references item_for_sale)
total       | float     | not null, default: 0

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users)
item_id     | integer   | not null, foreign key (references item_for_sale)
body        | text      |
stars       | integer   | not null

## items_for_sale
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
shop_id     | integer   | not null
price       | float     | not null
qty         | integer   | not null
name        | string    | not null
description | text      |

## shops
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references user)
name        | string    | not null
description | text      |
location    | string    | not null

## images
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
shop_id     | integer   | not null foreign key (references shop)
item_id     | listing   | foreign key (references item_for_sale)
urls        | text      | not null


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique
location        | string    |
