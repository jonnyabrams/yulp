CREATE TABLE users (
id BIGSERIAL NOT NULL PRIMARY KEY, 
username VARCHAR(50) NOT NULL UNIQUE, 
email VARCHAR(50) NOT NULL, 
password TEXT NOT NULL
);