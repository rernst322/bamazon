DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
item_id INTEGER(50) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR (50) NOT NULL,
price INTEGER (50) NOT NULL,
stock INTEGER(20) NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock)
VALUES("Law & Order Season 2 DVD", "Movies/TV", "20", 5);

INSERT INTO products(product_name, department_name, price, stock)
VALUES("Dogs playing poker painting", "Art/Decor", "4000", 2);

INSERT INTO products(product_name, department_name, price, stock)
VALUES("Spy Camera", "Electronic", "999", 30);

INSERT INTO products(product_name, department_name, price, stock)
VALUES("Iphone 13", "Electronics", "7034", 3);

INSERT INTO products(product_name, department_name, price, stock)
VALUES("Chicken N Pickle T-shirt", "Clothing", "18", 10);

INSERT INTO products(product_name, department_name, price, stock)
VALUES("Law & Order SVU Season 4 DVD", "Movies/TV", "25", 5);

INSERT INTO products(product_name, department_name, price, stock)
VALUES("MSU Sweatpants", "Clothing", "35", 10);

INSERT INTO products(product_name, department_name, price, stock)
VALUES("Jesus Dunking A Basketball Painting", "Art/Decor", "435", 4);

INSERT INTO products(product_name, department_name, price, stock)
VALUES("Magic 8 Ball", "Toys", "12", 22);

INSERT INTO products(product_name, department_name, price, stock)
VALUES("Barbie Dream House", "Toys", "123", 14);