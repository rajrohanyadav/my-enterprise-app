var express = require('express')
var app = express()

app.get('/', (req, res) => {
    res.status(200).send('hello')
});

app.listen(3000);