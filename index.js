'use strict';

const path = require('path');
const express = require('express');

const app = express();

// Set some properties on the app instance
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get(/\d+/g, (req, res, next) => {
    console.log(`Received number`);
    next();
});

app.get('/echo-:text', (req, res) => {
    res.send(req.params.text);
});


const server = app.listen(3000, () => {
    console.log(`Server listening on port ${server.address().port}`);
});

