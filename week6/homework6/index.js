const Chalk = require('chalk');
const app = require('./app');
const connectDB = require('./config/db');

connectDB();

// Start up the server on a customer port, if required.
const DEFAULT_PORT = 3000;
const PORT = process.env.PORT || DEFAULT_PORT;

app.listen(PORT, () => {
  console.info(
    `server has started on port ${
      PORT === DEFAULT_PORT ? PORT : Chalk.bgYellowBright(PORT)
    }`,
  );
});
