// forma de criar as rotas usando consign
module.exports = app => {
    app.get('/users', (req, res) => {
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

    app.get("/users/admin", (req, res) => {
        console.log("URL: " + req.url);
        console.log("Method: " + req.method);
    
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({
            users: []});
    });
};