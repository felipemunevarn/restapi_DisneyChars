import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Movies = sequelize.define('movies', {
  id_movies: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  image: {
    type: Sequelize.TEXT
  },
  title: {
    type: Sequelize.TEXT
  },
  year: {
    type: Sequelize.INTEGER
  },
  ranking: {
    type: Sequelize.FLOAT
  },
  gender: {
    type: Sequelize.INTEGER
  }
})

// id_movies INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
// image VARCHAR(100),
// title VARCHAR(50),
// year INT,
// ranking FLOAT,
// gender INT,
//
// FOREIGN KEY (gender) REFERENCES genders(id_gender)

export default Movies;
