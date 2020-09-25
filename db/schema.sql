DROP DATABASE IF EXISTS etsySeller;

CREATE DATABASE etsySeller;

USE etsySeller;

CREATE TABLE sellers (
  id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
  first_name varchar(99) NOT NULL,
  last_name varchar(99) NOT NULL,
  seller_image varchar(255),
  store_id int
);

CREATE TABLE stores (
  id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
  store_name varchar(255) NOT NULL,
  sales int,
  year_started int(4),
  based_in varchar(100),
  store_image varchar(255)
);

CREATE TABLE products (
  id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
  product_name varchar(255) NOT NULL,
  product_price decimal(5, 2) NOT NULL,
  is_free_shipping tinyint(1) NOT NULL,
  product_image varchar(255) NOT NULL,
  store_id int NOT NULL
);