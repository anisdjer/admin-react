const db = require('../../db');
const Sequelize = require('sequelize');

module.exports.userRepository = require('./user');
module.exports.tweetRepository = require('./tweet');