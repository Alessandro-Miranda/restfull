// Subir o servidor utilizando o express

const express = require("express");
const routesIndex = require("./routes/index");
const routesUser = require("./routes/users");
const app = express();

app.use(routesIndex);
app.use('/users', routesUser);

app.listen(3000, "127.0.0.1", () =>
{
    console.log("Server is running...");
});