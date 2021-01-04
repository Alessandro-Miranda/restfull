// Subir o servidor utilizando o express

const express = require("express");

// utilizando o Routes do express
// const routesIndex = require("./routes/index");
// const routesUser = require("./routes/users");

// forma utilizando o consign
const consign = require("consign");

const app = express();

consign().include('routes').into(app);

app.listen(3000, "127.0.0.1", () =>
{
    console.log("Server is running...");
});