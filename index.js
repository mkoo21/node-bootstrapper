'use strict';

const path = require('path');
const express = require('express');

const app = express();
require('./routes')(app);

// Set some properties on the app instance
app.use(express.static(path.join(__dirname, 'views')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const server = app.listen(3000, () => {
    console.log(`Server listening on port ${server.address().port}`);
});

