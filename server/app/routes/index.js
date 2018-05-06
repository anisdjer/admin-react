const ModelRoute = require('./model-route');
const {repositoryBinding} = require('../../utils')
const {userRepository, tweetRepository} = require('../repositories');
const {userSerializer, tweetSerializer} = require('../serializers');

module.exports.user = repositoryBinding(new ModelRoute(userRepository, userSerializer));
module.exports.tweet = repositoryBinding(new ModelRoute(tweetRepository, tweetSerializer));
