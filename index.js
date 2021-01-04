// Subir o servidor utilizando o express

const express = require("express");
const routesIndex = require("./routes/index");
const routeUsersindex = require("./routes/users");
const app = express();



app.listen(3000, "127.0.0.1", () =>
{
    console.log("Server is running...");
});