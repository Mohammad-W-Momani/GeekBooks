-- write the database name that you use here
USE db_name;

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
   
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL,
   
    PRIMARY KEY (id)
);

-- example:
CREATE TABLE products (
    id INT AUTO_INCREMENT NOT NULL,
   
    PRIMARY KEY (id)
);