const express = require('express');
const app = express();
const news = require('./news');

app.get('/', (req, res) => {
    res.send(JSON.stringify(news));
});

app.listen(3000,
    () => { console.log('Application started at port 3000') });