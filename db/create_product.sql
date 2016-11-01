CREATE TABLE products {
   id PRIMARY KEY NOT NULL,
   name VARCHAR(40),
   description TEXT,
   price INT,
   imageurl BYTEA
 }

   INSERT INTO products (name, description, price, imageurl)
   VALUES ('Oxycotin', 'This stuff will put you on your ass', 80, 'http://www.stopoxy.com/wp-content/uploads/2013/02/oxycontin-2.jpg');
   INSERT INTO products (name, description, price, imageurl)
   VALUES ('Roxycotin', 'We call these the blue Devils because now you are addicted', 50, 'http://silkroad-pharmacy.com/wp-content/uploads/2014/04/Roxycontin-30mg-570x520.jpg');
   INSERT INTO products (name, description, price, imageurl)
   VALUES ('Aspirin', 'You will live', 15, 'http://cdn1.medicalnewstoday.com/content/images/articles/161/161255/a-bottle-of-aspirin.jpg');
   INSERT INTO products (name, description, price, imageurl)
   VALUES ('Morphine', 'Majestic stuff', 100, 'http://dilaudid.net/wp-content/uploads/2012/07/morphine.jpg');
   INSERT INTO products (name, description, price, imageurl)
   VALUES ($1,
           $2,
           $3,
           $4);
