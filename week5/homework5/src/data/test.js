/* eslint-disable */
const axios = require('axios');
const connectDB = require('../../config/db');
const server = 'http://localhost:3000';

async function test() {
  await connectDB();

  let result;

  //
  // let id = '5dce84cc05fd8f9f5e3239e1';
  // let user = await axios.get(`${server}/user/${id}`);
  // console.log(user);

  // try {
  //   let url = `${server}/user/all`;
  //   console.log(url);
  //   let users = await axios.get(url);
  //   console.log('got user data');
  //   // console.log(users.data);
  // } catch (err) {
  //   console.log('catch() in test()');
  //   // console.log(err);
  //   // console.log(err.response.statusText);
  //   console.log(err.message);
  // }

  // GET a user by name (query string)
  try {
    result = await axios.get(`${server}/user`, {
      params: {
        name: 'Antonia',
      },
    });

    process.exit(0);
  } catch (err) {
    console.log(err.response.data.message);
  }

  // POST a user
  // try {
  //   result = await axios.post(`${server}/user`, {
  //     name: 'Steve',
  //     // email: 'Stevo@mail',
  //     password: 'nadgerz'
  //   });
  //
  //   console.log(result.data);
  //
  //   process.exit(0);
  // } catch (err) {
  //   console.log('test.js POST');
  //   console.log(err.response.data.message);
  //   // console.log(err.message);
  // }

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

  //  TEST recipe GET + POST
  // try {
  //   result = await axios.post(`${server}/user/test`);
  //   console.log('POST result data');
  //   console.log(result.data);
  //
  //   process.exit(0);
  // } catch (err) {
  //   console.log('POST ERR');
  //   console.log(err.response.data.message);
  // }
  //
  //   try {
  //     result = await axios.get(`${server}/user/test`);
  //     console.log('GET result data');
  //     console.log(result.data);
  //     process.exit(0);
  //   } catch (err) {
  //     console.log('GET ERR');
  //     console.log(err.response.data.message);
  //   }

  //  GET a recipe
  //   try {
  //     result = await axios.post(`${server}/recipe`, {
  //       title: 'Eggs',
  //     });
  //
  //     console.log(result.data);
  //
  //     process.exit(0);
  //   } catch (err) {
  //     console.log(err.message);
  //   }

  //  POST a recipe
}

test();
