const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const Users = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  email: {
    type: Sequelize.TEXT
  },
  password: {
    type: Sequelize.TEXT
  }
}, {
  timestamps: false
});

module.exports = Users;
