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
    errorMsgs: {
      name: {
        required: 'User name is required',
        tooShort: 'Name should be longer than 1 letter',
        tooLong: 'The maximum characters allowed is 20 characters',
      },
      email: {
        required: 'Email is required',
        noUnique: 'A User with this Email already exists',
      },
      password: {
        required: 'Password is required',
        tooShort: 'the minimum length is 6 characters',
        tooLong: 'the maximum characters allowed is 30',
      },
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

const getErrorMsg = (badUser, badProperty) => {
  const error = badUser.validateSync();
  return error.errors[badProperty].message;
};

test('creating a user with an invalid username', async t => {
  t.plan(2);
  t.context.user.name = 's';
  const badProperty = 'name';
  let errorMsgExpected = t.context.errorMsgs.name.tooShort;
  let badUser = new UserModel(t.context.user);

  let errorMsg = getErrorMsg(badUser, badProperty);
  t.is(errorMsg, errorMsgExpected);

  t.context.user.name = 'sssssssssssssssssssssssssssssss';
  errorMsgExpected = t.context.errorMsgs.name.tooLong;
  badUser = new UserModel(t.context.user);

  errorMsg = getErrorMsg(badUser, badProperty);
  t.is(errorMsg, errorMsgExpected);
});

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
