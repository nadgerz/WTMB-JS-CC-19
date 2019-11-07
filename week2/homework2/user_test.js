/* eslint-disable */

const Database = require('./data/database');
const User = require('./user');
const Recipe = require('./recipe');
let mockRecipes = require('./recipes');

// TESTS
// addRecipe: ok
// getRecipeById: ok
// deleteRecipeById: ok

// let user1 = new User('Antonia', 'Antonia@mail.com', '1234');
// let user2 = new User('Berta', 'Berta@mail.com', 'qwerty');
// let user3 = new User('Chris Christofferson', 'Chris@mail.com', 'qwertz');

// let users = [user1, user2, user3];
//
// console.log(users);

// addRecipe
// console.log('======================================');
// console.log(recipe1.versions[0]);
// user1.addRecipe(recipe1.title, recipe1.versions[0]);
// console.log(user1.recipes);

// console.log('======================================');
// mockRecipes.forEach(recipe => user1.addRecipe(recipe.title, recipe.versions[0]));
// console.log(user1.recipes);

// deleteRecipeById
// console.log('======================================');
// user1.deleteRecipeById(user1.recipes[0].id);
// console.log(user1.recipes);

// getRecipeById
// console.log('======================================');
// console.log(user1.getRecipeById(user1.recipes[0].id));

// save
// console.log('======================================');
// mockRecipes.forEach(recipe => user2.addRecipe(recipe.title, recipe.versions[0]));
// console.log(users);

// Database.save('users', users);
console.log(Database.load('users'));
