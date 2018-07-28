-- Add this file under your project /database folder (create it if it doesn't exist)
-- then to execute it, run the command: 
-- sqlite3 database.sqlite < schema.sql
-- Run it from your terminal after navigating to /database folder
-- this will create a database file called database.sqlite

DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
   id        INTEGER       PRIMARY KEY AUTOINCREMENT,
   title     VARCHAR(10),
   firstname VARCHAR (50),
   surname   VARCHAR (50),
   email     VARCHAR (255) 
);

DROP TABLE IF EXISTS invoices;

CREATE TABLE invoices (
   id        INTEGER       PRIMARY KEY AUTOINCREMENT,
   reservation_id    INTEGER,
   total             INTEGER,
   surcharges        INTEGER,
   invoice_date_time DATETIME,
   paid              BOOLEAN  DEFAULT false,
   FOREIGN KEY(reservation_id) REFERENCES reservations(id)
);

DROP TABLE IF EXISTS room_types;

CREATE TABLE room_types (
   id        INTEGER       PRIMARY KEY AUTOINCREMENT,
   type_name      VARCHAR (50),
   original_price NUMBER,
   current_price  NUMBER
);

DROP TABLE IF EXISTS rooms;

CREATE TABLE rooms (
   id        INTEGER       PRIMARY KEY AUTOINCREMENT,
   room_type_id INTEGER,
   sea_view     BOOLEAN,
   FOREIGN KEY(room_type_id) REFERENCES room_types(id)
);

DROP TABLE IF EXISTS reservations;

CREATE TABLE reservations (
   id INTEGER  PRIMARY KEY AUTOINCREMENT,
   customer_id INTEGER,
   room_id INTEGER,
   check_in_date DATETIME,
   check_out_date DATETIME,
   room_price NUMBER,
   FOREIGN KEY(customer_id) REFERENCES customers(id),
   FOREIGN KEY(room_id) REFERENCES rooms(id)
);

DROP TABLE IF EXISTS  reviews;

CREATE TABLE reviews (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   customer_id INTEGER,
   rating INTEGER,
   comment VARCHAR(200),
   review_date DATETIME,
   FOREIGN KEY(customer_id) REFERENCES customers(id)
);

INSERT INTO customers (title, firstname, surname, email) VALUES ('Mr.', 'Laurie', 'Ainley', 'laurie@ainley.com');
INSERT INTO customers (title, firstname, surname, email) VALUES ('Mr.', 'Donald', 'Trump', 'don@twitter.com');
INSERT INTO customers (title, firstname, surname, email) VALUES ('Ms.', 'Beyonce', 'Knowles', 'beyonce@queen.gov');
insert into customers (title,firstname, surname,email) values ('Mr.', 'Barack','Obama', 'Obama@twitter.com');
insert into customers (title,firstname, surname,email) values ('Mr.', 'Shawki','Al-Dubaee', 'shawki@twitter.com');
insert into customers (title,firstname, surname,email) values ('Ms.', 'Aya','Al-Dubaee', 'mona@twitter.com');

INSERT INTO reservations (customer_id,room_id, check_in_date, check_out_date, room_price) VALUES (1,1,'25/07/2018', '28/07/2018', 100);
INSERT INTO reservations (customer_id,room_id, check_in_date, check_out_date, room_price) VALUES (1,1,'25/07/2018', '28/07/2018', 100);
INSERT INTO reservations (customer_id,room_id, check_in_date, check_out_date, room_price) VALUES (2,2,'25/07/2018', '28/07/2018', 100);
INSERT INTO invoices (reservation_id,total, surcharges, invoice_date_time, paid) VALUES (100,178,50,'12:31:11','false');
INSERT INTO invoices (reservation_id,total, surcharges, invoice_date_time, paid) VALUES (101,178,50,'10:30:01','true');
INSERT INTO invoices (reservation_id,total, surcharges, invoice_date_time, paid) VALUES (102,100,3,'01:20:15','true');

INSERT INTO reviews (customer_id,rating, comment, review_date) VALUES (1,3,'Good','27/05/2018');
INSERT INTO reviews (customer_id,rating, comment, review_date) VALUES (2,3,'Brillient','15/05/2018');


