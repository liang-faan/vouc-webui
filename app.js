const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const bodyParser = require('body-parser');

const app = express();


// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.cookieParser());
// parse an HTML body into a string
// app.use(bodyParser.text({ type: 'text/html' }))
app.use(express.static('views', {index: false}))
// app.use('/views', express.static(__dirname + '/views'));
app.use('/', routes);

module.exports = app;