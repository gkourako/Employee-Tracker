
CREATE DATABASE corp_db;

USE corp_db;

CREATE TABLE department (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(30)
);
  
CREATE TABLE role (
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(30),
department_id INT,
salary DECIMAL

);
CREATE TABLE employee (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT NOT NULL,
  manager_id INT
);

INSERT INTO roles (title, department_id, salary)
VALUES ("Junior Dev", 3 , 65000)

INSERT INTO department (name)
VALUES ("Sales Team"),
 ("Influencer Team"),
 ("Ops Team"),
 ("LP Team"),
 ("Leadership")