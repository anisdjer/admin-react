var apiSerializer = require('jsonapi-serializer');

let serializer = new apiSerializer.Serializer('user', {
    attributes: ['username', 'firstName', 'lastName', 'createdAt', 'updatedAt'],
    keyForAttribute: 'camelCase',
    pluralizeType: false
});

let deserializer = new apiSerializer.Deserializer({
    keyForAttribute: 'camelCase'
});

module.exports.serialize = serializer.serialize.bind(serializer);
module.exports.deserialize = deserializer.deserialize.bind(deserializer);
module.exports.error = function (options) {
    return new apiSerializer.Error(options);
};
