/* eslint-disable */
const Chalk = require('chalk');
// const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const HttpStatus = require('http-status-codes');

const userRoute = require('./routes/user');

const app = express();

// Init Middleware
app.set('view engine', 'pug');
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

// will render the index.html file if nothing else is specified
app.use(express.static(__dirname + 'public'));

// Registering the custom routes
app.use('/user', userRoute);
// app.use('/user', require('./routes/user')); // alternative syntax

//
// These two route handlers should come last.

// Handler for 404 error
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

// Handler for 500 error
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.sendFile(path.join(__dirname, '../public/500.html'));
});

// Start up the server, on a customer port, if required.
const DEFAULT_PORT = 3000;
const PORT = process.env.PORT || DEFAULT_PORT;

app.listen(PORT, () => {
  console.info(
    `server has started on port ${
      PORT === DEFAULT_PORT ? PORT : Chalk.bgYellowBright(PORT)
    }`,
  );
});
