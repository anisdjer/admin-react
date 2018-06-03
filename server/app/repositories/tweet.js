const db = require('../../db');
const Sequelize = require('sequelize');

const Tweet = db.define('tweet', {
  body: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Tweet.belongsTo(require('./user'), {foreignKey: 'userId', targetKey: 'id'})

module.exports = Tweet;