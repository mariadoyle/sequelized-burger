CREATE DATABASE sql_burgers_db;
USE sql_burgers_db;

CREATE TABLE burgers
(
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);

SELECT * FROM burgers;