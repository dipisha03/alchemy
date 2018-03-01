DROP DATABASE IF EXISTS alchemy_db;

CREATE DATABASE alchemy_db;
USE alchemy_db;

CREATE TABLE alchemy_table (
	id int NOT NULL AUTO_INCREMENT,
	username varchar(200) NOT NULL,
	gender varchar (300) NOT NULL,
	age INT (500) NOT NULL,
	sign varchar (400) NOT NULL,
	photo url (500) NOT NULL,
	possibleMatch varchar (500) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE alchemy_match (
	id int NOT NULL AUTO_INCREMENT,
	sign varchar(500) NOT NULL,
	possibleMatch varchar (500) NOT NULL,
	PRIMARY KEY (id)
);