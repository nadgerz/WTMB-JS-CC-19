require('../db-connection');
const axios = require('axios');
const server = 'http://localhost:3000';

async function test() {
  let result;

  // POST a user
  try {
    result = await axios.post(`${server}/user`, {
      name: 'Fred',
      email: 'fred@mail',
    });

    console.log(result.data);

    process.exit(0);
  } catch (err) {
    console.log(err.message);
  }


}

test();
