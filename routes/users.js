const NeDB = require("nedb");

let db = new NeDB({
    filename: 'users.db',
    autoload: true
});

// forma de criar as rotas usando consign
module.exports = app => {

    let route = app.route('/users');

    route.get((req, res) => {
        // 1 para ordernar de forma ascendente ou -1 para ordenar de forma descendente
        db.find({}).sort({ name: 1 }).exec((err, users) => {
            if(err)
            {
                app.utils.error.send(err, req, res);
            }
            else
            {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json({
                    users
                });
            }
        });
    });

    route.post((req, res) => {

        db.insert(req.body, (err, user) => {
            if(err)
            {
                app.utils.error.send(err, req, res);
            }
            else
            {
                res.status(200).json(user);
            }
        })
    });

    let routeId = app.route('/users/:id');

    routeId.get((req, res) => {
        db.findOne({_id: req.params.id}).exec((err, user) => {
            if(err)
            {
                app.utils.error.send(err, req, res);
            }
            else
            {
                res.status(200).json(user);
            }
        });
    })
};