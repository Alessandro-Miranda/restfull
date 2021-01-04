const express = require("express");
const userRoutes = express.Router();

routes.get('/users', (req, res) => {
    console.log("URL: " + req.url);
    console.log("Method: " + req.method);

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
        users: [{
            id: 1,
            name: 'Alessandro',
            email: 'alessandro@alessandro.com'
        },
        {
            id: 2,
            name: "João",
            email: "joaodasilva@teste.com"
        }]
    });

});

module.exports = userRoutes;