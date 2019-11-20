const assert = require('assert');
import test from 'ava';
import request from 'supertest';
import UserModel from '../../models/user';




const steve = new UserModel({
  name: 'steve',
  email: 'stave@mail.com',
  password: '1235677',
});

let error = steve.validateSync();

console.log(error.errors['email']);
assert.equal(error.errors['email'].message,
  `${steve.email} is not a valid email address!`);



// drink: {
//   type: String,
// enum: ['Coffee', 'Tea'],
//     required: function() {
//     return this.bacon > 3;
//   }
// }

