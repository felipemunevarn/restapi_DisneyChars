CREATE DATABASE characters_disney;

USE characters_disney;

CREATE TABLE characters[
  id_character INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  -- image,
  name VARCHAR(50),
  age INT,
  weight FLOAT,
  history VARCHAR(100),
  movies_series INT
]

CREATE TABLE movies_series[
  id_movies INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  -- image,
  title VARCHAR(50),
  -- date INT,
  ranking INT,
  characters INT
]

CREATE TABLE gender[
  name VARCHAR(50),
  -- image,
  movies_series INT
]
