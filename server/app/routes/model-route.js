module.exports = class ModelRoute {
    constructor(name, repositoryFactory, serializerFactory, relations = []) {
        this.name = name;
        this.repositoryFactory = repositoryFactory;
        this.serializerFactory = serializerFactory;
        this.relations = relations.map(model => repositoryFactory(model));
        
        this.repository = repositoryFactory(name);
        this.serializer = serializerFactory(name);
    }

    getAll(req, res, next) {
        this.repository.findAll({include: this.relations})
            .then(users => {
                if (users !== null) {
                    res.json(this.serializer.serialize(users))
                } else {
                    res.status(404).end()
                }
            })
            .catch(() => res.status(400).end())
    }

    getOne(req, res, next) {
        this.repository.findOne({ where: {id: req.params.id}, include: this.relations})
            .then(user => {
                if (user) {
                    res.json(this.serializer.serialize(user))
                } else {
                    res.status(404).json(this.serializer.error({status: 404}))
                }
            })
            .catch((e) => res.status(400).json({status: 400, m: e.message}))
    }

    create(req, res, next) {
        let user = req.body;
        user.id = undefined;

        this.repository.create(user)
            .then(user => res.json(this.serializer.serialize(user)))
            .catch(() => res.status(400).json(this.serializer.error({status: 400})))
    }

    update(req, res, next) {
        this.repository.findOne({ where: {id: req.params.id}})
            .then(user => {
                if (user) {
                    user.update({...req.body, id: undefined});
                    res.json(user)
                } else {
                    res.status(404).end();
                }
            })
            .catch((e) => res.status(400).json(e.message))
    }

    delete(req, res, next) {
        this.repository.findOne({ where: {id: req.params.id}})
            .then(user => {
                if (user) {
                    user.destroy(this.serializer.serialize(user));
                    res.status(204).json();
                } else {
                    res.status(404).end();
                }
            })
            .catch(() => res.status(400).end())
    }

    getAssociation(associationName) {
        return (req, res, next) => {
            this.repositoryFactory(associationName).findAll({
                where: {
                    [this.name + 'Id']: req.params.id
                },
                include: this.relations.concat(this.repository)
            })
                .then(users => {
                    if (users !== null) {
                        res.json(this.serializerFactory(associationName).serialize(users))
                    } else {
                        res.status(404).end()
                    }
                })
                .catch(() => res.status(400).end())
        }
    }
}
