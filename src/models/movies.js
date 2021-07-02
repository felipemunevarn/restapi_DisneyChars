const Sequelize = require('sequelize');
const sequelize = require('../database/database');

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
}, {
  timestamps: false
});

module.exports = Movies;
