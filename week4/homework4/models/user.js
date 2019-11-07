const uuid = require('uuid/v1');
const Recipe = require('./recipe');
// const UserService = require('../services/user-service');

module.exports = class User {
  constructor(name, email, password, id, recipes = []) {
    this.name = name;
    this.id = id || uuid();
    this.email = email;
    this.password = password;

    this.recipes = recipes;
  }

  saveRecipe(title, version) {
    const recipe = new Recipe(title);
    recipe.saveVersion(version);

    if (this.titleExists(title)) {
      console.log('no recipe title duplicate allowed');
      return;
    }

    this.recipes.push(recipe);
  }

  titleExists(title) {
    return this.recipes.map(recipe => recipe.title).includes(title);
  }

  deleteRecipeById(id) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== id);
  }

  getRecipeById(id) {
    const recipeIndex = this.recipes.findIndex(recipe => recipe.id === id);
    return this.recipes[recipeIndex];
  }

  static create({ name, email, password, id, recipes }) {
    const user = new User(name, email, password, id);

    user.recipes = recipes.map(recipe => Recipe.create(recipe));

    return user;
  }
};

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
