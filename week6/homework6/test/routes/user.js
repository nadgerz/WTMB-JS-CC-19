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
  await mongoose.connect(uri, {
    useMongoClient: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

// populating  database with dummy data
test.beforeEach(async t => {
  const user = new UserModel({
    name: 'steve',
    email: 'steve@mail.com',
    password: '123567',
  });
  await user.save();

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

test.serial('litmus get user', async t => {
  const { app, userRoute } = t.context;
  const res = await request(app).get(`${userRoute}/litmus`);

  console.log(res.text);
  t.is(res.status, 200);

  // t.is(res.body.name, 'One');
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
