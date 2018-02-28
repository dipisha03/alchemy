DROP DATABASE IF EXISTS alchemy_db;

CREATE DATABASE alchemy_db;
USE alchemy_db;

CREATE TABLE alchemy_table (
	id int NOT NULL AUTO_INCREMENT,
	username varchar(200) NULL,
    gender varchar (300) NULL, 
    age INT (500) NOT NULL,
	sign varchar (400) NULL,
    photo url (500) NULL,
	PRIMARY KEY (id)
);

CREATE TABLE alchemy_match (
	id int NOT NULL AUTO_INCREMENT,
	sign varchar(500) NULL,
	match1 varchar (500) NULL,
	match2 varchar (500) NULL,
	match3 varchar (500) NULL,
	match4 varchar(500) NULL,
	match5 varchar(500) NULL,
	match6 varchar(500) NULL,
	match7 varchar(500) NULL,
	match8 varchar(500) NULL,
	match9 varchar(500) NULL,
	match10 varchar(500) NULL,
	match11 varchar(500) NULL,
	match12 varchar(500) NULL,
	PRIMARY KEY (id)
);

INSERT (sign, match1, match2) VALUES ('Virgo', 'Libra', 'Capricorn')
INSERT (sigg, match2, match3, match4) VALUES ('Cancer', 'Libra', 'Virgo', 'pisces')

