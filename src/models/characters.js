const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const Characters = sequelize.define('characters', {
  id_character: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  image: {
    type: Sequelize.TEXT
  },
  name: {
    type: Sequelize.TEXT
  },
  age: {
    type: Sequelize.INTEGER
  },
  weight: {
    type: Sequelize.FLOAT
  },
  history: {
    type: Sequelize.TEXT
  }
}, {
  timestamps: false
});

module.exports = Characters;
