import test from 'ava';
import request from 'supertest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

import app from '../../app';
import UserModel from '../../models/user';

// Start MongoDB instance
const mongod = new MongoMemoryServer();

test.before(async () => {
  const uri = await mongod.getConnectionString();

  await mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => console.log('Fake Mongo connected'))
    .catch(err => console.error(err.message));
});

// populating  database with dummy data
test.beforeEach(async t => {
  // const user = new UserModel({
  //   name: 'steve',
  //   email: 'steve@mail.com',
  //   password: '123567',
  // });
  // await user.save();

  t.context = {
    app,
    userRoute: '/user',
    //  TODO: add extra goodUser, badUser objects
  };
});

// test.beforeEach(t => {
//   t.context = {
//     app,
//   };
// });

const checkLitmusResponse = (t, res) => {
  t.is(res.status, 200);
  t.is(res.text, `Test route for ${res.req.path} [${res.req.method}]`);
};

test('litmus tests for GET/POST/DELETE/PUT', async t => {
  t.plan(8);
  const { app, userRoute } = t.context;
  const litmusRoute = `${userRoute}/litmus`;
  let res;

  res = await request(app).get(litmusRoute);
  checkLitmusResponse(t, res);

  res = await request(app).post(litmusRoute);
  checkLitmusResponse(t, res);

  res = await request(app).delete(litmusRoute);
  checkLitmusResponse(t, res);

  res = await request(app).put(litmusRoute);
  checkLitmusResponse(t, res);
});

//
// test.serial('litmus create user', async t => {
//   const { app } = t.context;
//   const res = await request(app)
//     .post('/litmus')
//     .send({
//       email: 'new@example.com',
//       name: 'New name',
//     });
//
//   t.is(res.status, 200);
//   t.is(res.body.name, 'New name');
//
//   // Verify that user is created in DB
//   const newUser = await User.findOne({ email: 'new@example.com' });
//   t.is(newUser.name, 'New name');
// });

// TODO: test error messages
// let error = badUser.validateSync();

// test('Create new user', async t => {
//   t.plan(3);
//
//   const userToCreate = {
//     name: 'Armagan Amcalar',
//     age: 34,
//     meetups: [],
//   };
//
//   const res = await request(app)
//     .post('/person')
//     .send(userToCreate);
//
//   t.is(res.status, 200);
//   t.is(res.body.name, userToCreate.name);
//   t.is(res.body.age, userToCreate.age);
// });

// TODO SAi: should this be at the bottom of the page?
// clearing Dummy data
test.afterEach.always(() => UserModel.deleteMany());
// .remove is being deprecated
