const axios = require('axios');
const connectDB = require('../../config/db');
connectDB();
const server = 'http://localhost:3000';

async function test() {
  let result;

  //
  // let id = '5dce84cc05fd8f9f5e3239e1';
  // let user = await axios.get(`${server}/user/${id}`);
  // console.log(user);

  // result = await
  let users = await axios.get(`${server}/user/all`);
  console.log(users.data);

  // POST a user
  // try {
  //   result = await axios.post(`${server}/user`, {
  //     name: 'Steve',
  //     email: 'Stevo@mail',
  //     password: 'nadgerz'
  //   });
  //
  //   console.log(result.data);
  //
  //   process.exit(0);
  // } catch (err) {
  //   console.log(err.message);
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
  //   try {
  //     result = await axios.post(`${server}/recipe/test`);
  //     console.log(result.data);
  //
  //     process.exit(0);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  //   try {
  //     result = await axios.get(`${server}/recipe/test`);
  //     console.log(result.data);
  //     process.exit(0);
  //   } catch (err) {
  //     console.log(err.message);
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
