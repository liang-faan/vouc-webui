const express = require('express');
// const https = require('https');
const http = require('http');
const path = require('path');
const router = express.Router();

// router.get('/', (req, res) => {
//     console.log(req.body);
//     res.render('index', { title: 'Registration form' });
// });
router.get('/index', function (req, res) {
    res.render('index');
});

router.get('/', function (req, res) {
    // res.sendFile(path.join(__dirname+'/../views/index.html'));
    res.render('login');
    //__dirname : It will resolve to your project folder.
});

router.post('/login', (req, res) => {
    console.log(req.body);
    // var sendDetails = {
    //     "client": req.body.client,
    //     "clientSecret": req.body.clientSecret,
    //     "partner": req.body.partner,
    //     "channel": req.body.channel
    // };

    // sendDetails = JSON.stringify(sendDetails);

    var optionsPost = {
        host: 'localhost', // here only the domain name
        // (no http/https !)
        port: 8401,
        path: '/integration/auth', // the rest of the url with parameters if needed
        method: 'POST', // do GET
        headers: { 'Content-Type': 'application/json' }
    };
    var resPost = http.request(optionsPost, (resp) => {
        console.log(`statusCode: ${resp.statusCode}`)
        console.log(resp.headers.authorization);
        resp.on('data', (d) => {
            process.stdout.write(d)
        })
    });

    resPost.on('error', (error) => {
        console.error(error)
    })

    // resPost.write(sendDetails)
    resPost.write(JSON.stringify(req.body))
    resPost.end()
    // res.render('login');
    res.redirect('/index');
});

module.exports = router;