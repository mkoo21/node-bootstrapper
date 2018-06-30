'use strict';

const router = (app) => {
    app.get('/', (req, res) => {
        res.render('index');
    });

    // Regex path
    app.get(/\d+/g, (req, res, next) => {
        console.log('Received number');
        next(); // Pass control to next handler
    });

    // Route params (in URL) 
    app.get('/echo-:text', (req, res) => {
        res.send(req.params.text);
    });
};

module.exports = router;
