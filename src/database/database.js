import Sequelize from 'Sequelize';

export const sequelize = new Sequelize(
  'characters_disney',
  'root',
  'andres01',
  {
    host: 'localhost',
    dialect: 'mysql',
    pool:{
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000
    },
    logging: false
  }
)
