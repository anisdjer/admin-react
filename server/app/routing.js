const routes = require('./routes');
const app = require('express')();

const createModelRoutes = (name) => {
    app.get(`/${name}s`, routes[name].getAll);
    app.get(`/${name}s/:id([0-9]+)`, routes[name].getOne);
    app.post(`/${name}s`, routes[name].create);
    app.put(`/${name}s/:id([0-9]+)`, routes[name].update);
    app.delete(`/${name}s/:id([0-9]+)`, routes[name].delete);
}

module.exports = () => {
    createModelRoutes('user');
    createModelRoutes('tweet');

    return app;
};
