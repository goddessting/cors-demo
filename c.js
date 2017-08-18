const express = require('express');
const app = new express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3002");
    res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.header("Access-Control-Request-Headers", "text/plain;charset=UTF-8");
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});
app.post("/getName", function (req, res) {
    let a = req.body;

    console.log(a);

    res.send(a);
});

app.listen(3001, () => {
    console.log('server start, listening is 3001');
});
