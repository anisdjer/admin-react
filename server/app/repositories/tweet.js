const db = require('../../db');
const Sequelize = require('sequelize');

const Tweet = db.define('tweet', {
  body: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Tweet.belongsTo(require('./user'))

module.exports = Tweet;