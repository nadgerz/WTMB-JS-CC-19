require('./db-connection');
const axios = require('axios');
const server = 'http://localhost:3000';

let result;
try {
  result = axios.post(`${server}/user`, { name: 'Steeeeve', email: 'hmail' })
    .then((json) => console.log(json.data))
    .catch(console.error);
  process.exit(0);
  // console.log(result);

} catch (err) {
  console.log(err.message);
}
