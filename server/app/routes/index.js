const ModelRoute = require('./model-route');
const {repositoryBinding} = require('../../utils')
const repositories = require('../repositories');
const serializers = require('../serializers');

const repositoryFactory = (name) => {
  return repositories[name];
}

const serializerFactory = (name) => {
  return serializers[name] || new serializers.DefaultSerializer();
}

module.exports.user = repositoryBinding(new ModelRoute('user', repositoryFactory, serializerFactory));
module.exports.tweet = repositoryBinding(new ModelRoute('tweet', repositoryFactory, serializerFactory));
