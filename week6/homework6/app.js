/* eslint-disable */
const express = require('express');
const connectDB = require('./config/db');
const HttpStatus = require('http-status-codes');

const app = express();
connectDB();

// Init Middleware
app.set('view engine', 'pug');
// used instead of body-parser
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

// will render the index.html file if nothing else is specified
app.use(express.static(__dirname + 'public'));

// Registering the custom routes
app.use('/user', require('./routes/user'));
app.use('/recipe', require('./routes/recipe'));

// Handler for any error
app.use((req, res, next) => {
  switch (req.url) {
    case '/bibble':
      res.status(HttpStatus.IM_A_TEAPOT).send(HttpStatus.getStatusText(418));
      break;

    default:
      res
        .status(HttpStatus.NOT_FOUND)
        .render(HttpStatus.getStatusCode('Not Found') + '');
  }
  // next();
});

module.exports = app;