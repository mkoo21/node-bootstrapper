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

    app.get('/video', (req, res) => {
        const html = '<video loop autoplay controls class="background-vid">'
            + '<source src="static/Build_Our_Machine.mp4" type="video/mp4"></video>';
        res.send(html);
    });  
    app.get('/quote', (req, res) => {
        const html = '<blockquote class="blockquote text-right">'
            + '<p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            + 'Integer posuere erat a ante.</p><footer class="blockquote-footer">Martin</footer>';
        res.send(html);
    });
};

module.exports = router;
