const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/users");

const app = express();
const userRoutes = require("./routes/users");


app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(userRoutes.routes);

app.listen(8080);
