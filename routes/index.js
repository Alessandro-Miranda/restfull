// Criação da rota utilizando o consign
module.exports = app => {
    app.get('/', (req, res) => {
        console.log("URL: " + req.url);
        console.log("Method: " + req.method);
    
        res.statusCode = 200;
        res.setHeader("Content-Type", 'text/html; charset=utf-8');
        res.end("<h1>Olá, mundo!</h1>");
    });
};