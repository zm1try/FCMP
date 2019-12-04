const express = require('express');
const app = express();
const router = express.Router();
let news = require('./news');  

router.get('/news/:id', (req, res, next) => {
    const result = news.sourses.filter(item => item.id === req.params.id);
    res.send({ result: result });
});

router.get('/news', (req, res, next) => {
    res.send({ result: news.sourses });
});

app.use(express.json());

router.post('/news', (req, res) => {
    news.sourses = req.body.response;
    res.status('201').send();
});

router.put('/news/:id', (req, res, next) => {
    const id = req.params.id;
    news.sourses.push({
        id: id,
        title: req.body.response.title,
        description: req.body.response.description
    });
    res.status('201').send();
});

router.delete('/news/:id', (req, res, next) => {
    const id = req.params.id;
    news.sourses = news.sourses.filter(item => item.id !== id)
    res.status('201').send();
});

router.use((req, res, next) => {
    res.send('default response');
});

app.use('/', router);
app.listen(3000,
    () => { console.log('Application started at port 3000') });
