CREATE DATABASE characters_disney;

USE characters_disney;

CREATE TABLE characters(
  id_character INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  image VARCHAR(100),
  name VARCHAR(60),
  age INT(3),
  weight FLOAT,
  history VARCHAR(100),
  movies_series INT(11)
);

CREATE TABLE movies_series(
  id_movies INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  -- image,
  title VARCHAR(50),
  -- date INT,
  ranking INT,
  characters INT
)

CREATE TABLE gender(
  name VARCHAR(50),
  -- image,
  movies_series INT
)
