/* eslint-disable */

// const assert = require('assert');
import test from 'ava';
import UserModel from '../../models/user';

test('Create new user with UserModel', t => {
  t.plan(4);

  const validUser = {
    name: 'steve',
    email: 'steve@mail.com',
    password: '123567',
  };

  const createdUser = new UserModel(validUser);

  // TODO: improve below
  t.is(createdUser.recipes.length === 0, validUser.recipes.length === 0);
  t.is(createdUser.name, validUser.name);
  t.is(createdUser.email, validUser.email);
  t.is(createdUser.password, validUser.password);
});

test('fail at creating a new user with UserModel', t => {
  t.plan(3);

  const badUser = {
    name: 's',
    email: 's@',
    password: '12356',
  };

  // const createdUser = new UserModel(badUser);
  // TODO: check that createdUser is undefined

  // validateSync();
  // Returns:
  // «ValidationError,undefined» ValidationError if there are errors during validation, or undefined if there is no error.
  // This method is useful if you need synchronous validation.

  // let error = validUser.validateSync();

  // console.log(error.errors['email']);
  // assert.equal(error.errors['email'].message,
  //   `${validUser.email} is not a valid email address!`);

  console.log('recipes');
  console.log(createdUser.recipes);

  t.is(createdUser.name, validUser.name);
  t.is(createdUser.email, validUser.email);
  t.is(createdUser.password, validUser.password);
});

// drink: {
//   type: String,
// enum: ['Coffee', 'Tea'],
//     required: function() {
//     return this.bacon > 3;
//   }
// }
