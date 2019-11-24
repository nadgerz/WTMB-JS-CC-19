/* eslint-disable */

// const assert = require('assert');
import test from 'ava';
import UserModel from '../../models/user';

test.beforeEach(t => {
  t.context = {
    user: {
      name: 'steve',
      email: 'steve@mail.com',
      password: '123567',
    },
  };
});

test('creating new user with valid input', async t => {
  t.plan(5);

  const validUser = new UserModel(t.context.user);

  t.true(Array.isArray(validUser.recipes));
  t.true(validUser.recipes.length === 0);
  t.is(validUser.name, t.context.user.name);
  t.is(validUser.email, t.context.user.email);
  t.is(validUser.password, t.context.user.password);
});
//
// test('creating a user with an invalid username', async t => {
//   t.context.user.name = 's';
//   const badUser = new UserModel(t.context.user);
//
//   // this returns a promise without the await
//   console.log('badUser.save');
//   console.log(await badUser.save());
//
//   // t.false(badUser);
//
//   // let error = badUser.validateSync();
// error.errors.message
//   // console.log('ERROR');
//   // console.log(error);
// });

// test.after.always(async () => {
//   mongoose.disconnect();
//   // mongod.stop();
// });

// test('authenticating with an invalid password', async t => {
//   t.context.credentials.password = 'bad_password';
//   const isValid = t.context.authenticator.authenticate(t.context.credentials);
//   t.false(await isValid);
// });

// test('Create new user with UserModel', t => {
//   t.plan(5);
//
//   const validUser = {
//     name: 'steve',
//     email: 'steve@mail.com',
//     password: '123567',
//   };
//
//   const createdUser = new UserModel(validUser);
//
//
//   t.true(Array.isArray(createdUser.recipes));
//   t.true(createdUser.recipes.length === 0);
//   t.is(createdUser.name, validUser.name);
//   t.is(createdUser.email, validUser.email);
//   t.is(createdUser.password, validUser.password);
// });
//
// test('fail at creating a new user with UserModel', t => {
//   t.plan(3);
//
//   const badUser = {
//     name: 's',
//     email: 's@',
//     password: '12356',
//   };
//
//   // const createdUser = new UserModel(badUser);
//
//   // validateSync();
//   // Returns:
//   // «ValidationError,undefined» ValidationError if there are errors during validation, or undefined if there is no error.
//   // This method is useful if you need synchronous validation.
//
//   // let error = validUser.validateSync();
//
//   // console.log(error.errors['email']);
//   // assert.equal(error.errors['email'].message,
//   //   `${validUser.email} is not a valid email address!`);
//
//   console.log('recipes');
//   console.log(createdUser.recipes);
//
//   t.is(createdUser.name, validUser.name);
//   t.is(createdUser.email, validUser.email);
//   t.is(createdUser.password, validUser.password);
// });

// drink: {
//   type: String,
// enum: ['Coffee', 'Tea'],
//     required: function() {
//     return this.bacon > 3;
//   }
// }
