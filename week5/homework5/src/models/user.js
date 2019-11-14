const mongoose = require('mongoose');

// const Recipe = require('./recipe');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
  },
  email: {
    type: String,
    required: true,
  },
  // recipes: [{
  //   type: mongoose.SchemaTypes.ObjectId,
  //   ref: 'Meetup',
  //   autopopulate: {
  //     maxDepth: 1,
  //   },
  // }],
});

// UserSchema.plugin(require('mongoose-autopopulate'));

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;

// $ node test.js
// [Function: Bibble]
// private values
// undefined
// private funcs
// undefined
// undefined
// public funcs def
// undefined
// undefined
// public funcs call
// PRIVATE!
// 42
//
// ~~~~~~~~~~~~~~~~
//
// test.js
//
// ----- >% ---------- %< -----
// const Bibble = require('./models/bibble');
//
// console.log(Bibble);
//
// const bibble = new Bibble();
//
// console.log('private values')
// console.log(bibble._privateVal1);
//
// console.log('private funcs')
// console.log(bibble._privateMethod1);
// console.log(bibble._privateMethod2);
//
// console.log('public funcs def')
// console.log(bibble._publicMethod1);
// console.log(bibble._publicMethod2);
//
// console.log('public funcs call')
// console.log(bibble.publicMethod1());
// console.log(bibble.publicMethod2());
// ----- >% ---------- %< -----
//
// models/bibble.js
//
// ----- >% ---------- %< -----
// const Bibble = (function() {
//   const _privateVal1 = 42;
//
//   const _privateMethod1 = function() {
//     return 'PRIVATE!';
//   };
//
//   const _privateMethod2 = function() {
//     return _privateVal1;
//   };
//
//   class Bibble {
//     constructor() {}
//
//     publicMethod1() {
//       return _privateMethod1();
//     }
//
//     publicMethod2() {
//       return _privateMethod2();
//     }
//   }
//
//   return Bibble;
// })(); // <==== call it immediately to return a Bibble class
//
// /*
// module.exports = {
//   Bibble: Bibble,
//   Babble: Babble,
// };
// */
//
// module.exports = Bibble;
// ----- >% ---------- %< -----
