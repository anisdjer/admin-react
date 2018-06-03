const ModelRoute = require('./model-route');
const { contextBinding } = require('../../utils')
const repositories = require('../repositories');
const serializers = require('../serializers');

const repositoryFactory = (name) => {
  return repositories[name];
}

const serializerFactory = (name) => {
  return serializers[name] || new serializers.DefaultSerializer();
}

let routes = {};

// automate this
[{
  name: 'tweet',
  relations: ['user']
}, {
  name: 'user'
}].forEach(model => {
  routes[model.name] = contextBinding(new ModelRoute(model.name, repositoryFactory, serializerFactory, model.relations));
})

module.exports = routes;