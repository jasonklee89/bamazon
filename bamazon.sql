DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  item_id INTEGER(30) NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price DECIMAL(5,2) default 0,
  stock_quantity INTEGER (30) default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Strawberry Ice Cream", "Groceries", 5.00, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "Longboard", "Sports", 50.00, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "Fresh Kicks", "Apparel", 60.00, 30);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "Laptop", "Electronics", 500.00, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "Backpack", "Apparel", 30.00, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "Electric Guitar", "Electronics", 200.00, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "Sweet Shades", "Apparel", 10.00, 30);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "Apple Pie", "Groceries", 7.00, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "Tea", "Groceries", 5.00, 30);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "Light Bulb", "Electronics", 5.00, 30);