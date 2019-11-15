require('../db-connection');
const axios = require('axios');
const server = 'http://localhost:3000';

async function test() {
  let result;

  // POST a user
  try {
    result = await axios.post(`${server}/user`, {
      name: 'Antonia',
      email: 'Antonia@mail',
      password: 'amamamamamamaama'
    });

    console.log(result.data);

    process.exit(0);
  } catch (err) {
    console.log(err.message);
  }

  // DELETE a user
  // let deleteId = '5dcd957a1b84429940c0e84d';
  // try {
  //   await axios.delete(`${server}/user/${deleteId}`);
  //
  //   process.exit(0);
  // } catch (err) {
  //   console.error(err.message);
  // }

  // DELETE ALL users
  // try {
  //   await axios.delete(`${server}/user/all`);
  //   process.exit(0);
  // } catch (err) {
  //   console.error(err.message);
  // }


}

test();
