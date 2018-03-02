DROP DATABASE IF EXISTS alchemy_db;

CREATE DATABASE alchemy_db;
USE alchemy_db;

CREATE TABLE alchemy_table (
	id int NOT NULL AUTO_INCREMENT,
	username varchar(100) NOT NULL,
	gender varchar (100) NOT NULL,
	match1 varchar (100) NOT NULL,
	match2 varchar (100) NOT NULL,
	match3 varchar (100) NOT NULL,
	match4 varchar (100) NOT NULL,
	match5 varchar (100) NOT NULL,
	match6 varchar (100) NOT NULL,
	usersign1 varchar (100) NOT NULL,
	usersign2 varchar (100) NOT NULL,
	usersign3 varchar (100) NOT NULL,
	usersign4 varchar (100) NOT NULL,
	usersign5  varchar (100) NOT NULL,
	usersign6  varchar (100) NOT NULL,
	usersign7  varchar (100) NOT NULL,
	usersign8 varchar (100) NOT NULL,
	usersign9 varchar (100) NOT NULL,
	usersign10 varchar (100) NOT NULL,
	usersign11 varchar (100) NOT NULL,
	usersign12 varchar (100) NOT NULL,
	PRIMARY KEY (id)
);

