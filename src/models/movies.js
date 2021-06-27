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
}, {
  timestamps: false
});

export default Movies;
