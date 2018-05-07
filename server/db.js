const Sequelize = require('sequelize');
module.exports = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    operatorsAliases: false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    logging: console.log,
    // SQLite only
    storage: 'data/database.sqlite'
  });