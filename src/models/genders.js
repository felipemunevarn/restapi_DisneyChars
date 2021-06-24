import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Movies from './movies';

const Genders = sequelize.define('genders', {
  id_gender: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT
  },
  image: {
    type: Sequelize.TEXT
  }
});

Genders.hasMany(Movies, { foreignKey: 'gender', sourceKey: 'id_gender' });
Movies.belongsTo(Genders, { foreignKey: 'gender', sourceKey: 'id_gender' });

export default Genders;
