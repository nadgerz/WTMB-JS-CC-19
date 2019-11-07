/* eslint-disable */

const mockRecipes = require('./recipes');
const Recipe = require('./recipe');
const Ingredient = require('./ingredient');

// TESTS
// new Recipe: ok

// addVersion: ok
// getVersion: ok
// getVersionId: ok
// deleteVersionById: ok

// RecipeVersion.get:

// RecipeVersion.get:

let recipe1 = new Recipe(mockRecipes[1].title, mockRecipes[1].versions[0]);
// console.log(recipe1);

let testVersion = {
  id: 2,
  cookingTime: 10,
  servingSize: 4,

  ingredients: [],

  instructions: [],

  notes: [],

  tags: {},
};

recipe1.addVersion(testVersion);
// console.log('======================================');
// console.log(recipe1.versions);

// getVersion
// console.log('======================================');

// console.log(recipe1.getVersion(1));

// deleteVersionById
// recipe1.deleteVersionById(recipe1.versions[1].id);
// console.log('======================================');
// console.log(recipe1.versions);

// getVersionIndexById
// console.log('======================================');
console.log(recipe1.getVersionIndexById(recipe1.versions[0].id));

// RecipeVersion.get
console.log('======================================');
console.log(recipe1.versions[0].get());
