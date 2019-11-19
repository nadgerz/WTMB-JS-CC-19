/* eslint-disable */
const Chalk = require('chalk');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const userRoute = require('./routes/user');
const app = express();

app.set('view engine', 'pug');
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

// will render the index.html file if nothing else is specified
app.use(express.static(__dirname + 'public'));

// registering the custom route
app.use(userRoute);

const DEFAULT_PORT = 3000;
const PORT = process.env.PORT || DEFAULT_PORT;
app.listen(PORT, () => {
  console.info(
    `server has started on port ${
      PORT === DEFAULT_PORT ? PORT : Chalk.bgYellowBright(PORT)
    }`,
  );
});

// those two should be at the BOTTOM(!!) of this page
//
// Handler for 404 error
app.use((req, res, next) => {
  res.status(404).render('404');

  // next();
});

// Handler for 500 error
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.sendFile(path.join(__dirname, './public/500.html'));
});
