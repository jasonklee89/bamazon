DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price DECIMAL(5,2) default 0,
  stock_quantity INTEGER (30) default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Strawberry Ice Cream", "Groceries", 5.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Longboard", "Sports", 50.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fresh Kicks", "Apparel", 60.00, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Laptop", "Electronics", 500.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Backpack", "Apparel", 30.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Electric Guitar", "Electronics", 200.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sweet Shades", "Apparel", 10.00, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple Pie", "Groceries", 7.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tea", "Groceries", 5.00, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Light Bulb", "Electronics", 5.00, 30);