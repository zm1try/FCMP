const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017';
const dbName = 'news';

mongoose.connect(`${url}/${dbName}`, {useNewUrlParser: true});

const newsSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String
});

const NewsModel = mongoose.model('News', newsSchema);

router.get('/news/:id', (req, res, next) => {
    NewsModel.find({id: req.params.id}, (error, response) => {
      res.status('201').send(response);
    });
});

router.get('/news', (req, res, next) => {
    NewsModel.find({}, (error, response) => {
      res.status('201').send(response);
    });
});

app.use(express.json());

router.post('/news', (req, res) => {
    const news = req.body.response;
    NewsModel.insertMany(news, (error, response) => {
      res.status('201').send();
    });
});

router.put('/news/:id', (req, res, next) => {
  NewsModel.create({
      id: req.params.id,
      title: req.body.title,
      description: req.body.description
    }, (error, response) => {
      res.status('201').send();
    });
});

router.put('/news/update/:id', (req, res, next) => {
  NewsModel.update({
      id: req.params.id
    },
    {
      title: req.body.title,
      description: req.body.description
    }, (error, response) => {
      res.status('201').send();
    });
});

router.delete('/news/:id', (req, res, next) => {
    NewsModel.remove({
      id: req.params.id,
    }, (error, response) => {
      res.status('201').send();
    });
});

router.use((req, res, next) => {
    res.send('default response');
});

app.use('/', router);
app.listen(3000,
    () => { console.log('Application started at port 3000') });
