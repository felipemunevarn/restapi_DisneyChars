CREATE DATABASE characters_disney;

USE characters_disney;

-- characters N:N movies

CREATE TABLE characters(
  id_character INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  image VARCHAR(100),
  name VARCHAR(60),
  age INT,
  weight FLOAT,
  history VARCHAR(100),
);

-- genders 1:N movies

CREATE TABLE genders(
  id_gender INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  image VARCHAR(100),
);

CREATE TABLE movies(
  id_movies INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  image VARCHAR(100),
  title VARCHAR(50),
  year INT,
  ranking FLOAT,
  gender INT,

  FOREIGN KEY (gender) REFERENCES genders(id_gender)
);

CREATE TABLE characters_in_movies(
  characters INT,
  movies INT,

  FOREIGN KEY (characters) REFERENCES characters(id_character),
  FOREIGN KEY (movies) REFERENCES movies(id_movies),
  PRIMARY KEY (characters, movies)
);

CREATE TABLE users(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(100),
  password VARCHAR(100)
);
