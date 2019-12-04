const express = require('express');
const app = express();

const news = {
    sourses: [
        {
            title: 'title1',
            description: 'description1'
        },
        {
            title: 'title2',
            description: 'description2'
        },
    ]
}

app.get('/', (req, res) => {
    res.send(JSON.stringify(news));
});

app.listen(3000,
    () => { console.log('Application started at port 3000') });