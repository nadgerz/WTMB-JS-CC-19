/* eslint-disable */

const mockRecipes = require('./recipes');
const users = [];
// TODO: set up for language switch

const User = class {
  constructor(name, email, password) {
    this.name = name;
    this.id = `user-${name.replace(' ', '').toLowerCase()}`; // TODO: UUID
    this.email = email;
    this.password = password;

    this.recipes = [];
  }

  addRecipe(newRecipe) {
    this.recipes.push(newRecipe);
  }

  updateRecipe(editedRecipe) {
    let index = this.recipes.indexOf(editedRecipe);
    this.recipes.splice(index, 1, editedRecipe);
  }

  deleteRecipe(toDelete) {
    let index = this.recipes.indexOf(toDelete);
    this.recipes.splice(index, 1);
  }

  setEmail(newEmail) {
    this.email = newEmail;
  }

  setUserName(newName) {
    this.name = newName;
  }

  setPassword(newPassword) {
    this.password = newPassword;
  }
};

const RecipeVersion = class {
  constructor(
    {
      cookingTime = 0,
      servingSize = 0,
      ingredients = [],
      instructions = [],
      notes = [],
      tags = [],
    },
    id,
  ) {
    this.id = id;
    this.cookingTime = cookingTime;
    this.servingSize = servingSize;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.notes = notes;
    this.tags = tags;
  }
};

const Recipe = class {
  constructor(title, howTo) {
    this.title = title;
    // this.id // TODO: ID (should include the id of the user who generated the recipe),
    // this.images = [] // TODO: implement an images array
    // TODO: SOLVE problem with version ID (e.g. what to do in case of a deletion?)
    this.versions = [new RecipeVersion(howTo, 1)]; // TODO: limit versions array to... 15?
  }

  setTitle(newTitle) {
    this.title = newTitle;
  }

  //templateCopy : use in different function, to FILL form fields from
  // TODO: does the newVersion HAVE to be different from old version?
  addVersion(newVersion) {
    // let id = this.versions.length + 1;
    // idea for fix: when a new Version is generated, an older version was used as a template, so there already existed an id
    let id = newVersion.id + 1;

    this.versions.push(new RecipeVersion(newVersion, id));
  }

  getVersion(versionNo) {
    return this.versions[versionNo - 1];
  }

  deleteVersion(toDelete) {}

  // TODO: hide this function
  getVersionIndex(version) {
    // add all ids of existing versions to an array, find index of the version ID you're looking for in it
    let index = this.versions.map(elem => elem.id).indexOf(version.id);
    return index;
  }

  addIngredient(version, ingredient) {
    console.log(version);
    let index = this.getVersionIndex(version);

    console.log('index:' + index);
    index < 0
      ? console.log('index out of bounds')
      : this.versions[index].ingredients.push(new Ingredient(ingredient));
  }

  deleteIngredient(version, toDelete) {
    let versionIndex = this.getVersionIndex(version);
    let ingredientIndex = this.versions[versionIndex].ingredients.indexOf(
      toDelete,
    );

    this.versions[versionIndex].ingredients.splice(ingredientIndex, 1);
  }

  setCookingTime(version, time) {
    let index = this.getVersionIndex(version);
    this.versions[index].cookingTime = time;
  }

  addInstructions(version, instructions) {
    let index = this.getVersionIndex(version);
    this.versions[index].instructions = instructions;
  }

  addNotes(version, note) {
    let index = this.getVersionIndex(version);
    this.versions[index].notes = note;
  }
};

const Ingredient = class {
  constructor({ amount = 0.0, unit = '', name, sub = [] }) {
    this.amount = amount;
    this.unit = unit;
    this.name = name;
    this.sub = sub;
  }
};

const tags = {
  mealType: ['Breakfast & Brunch', 'Lunch', 'Dinner', 'Desserts'],
  dishType: [
    'Appetizers & Snacks',
    'Bread Recipes',
    'Cake Recipes',
    'Candy and Fudge',
    'Casserole Recipes',
    'Cocktails',
    'Cookies',
    'Fish Recipes',
    'Main Dishes',
    'Pasta',
    'Pie',
    'Pizza',
    'Salads',
    'Sandwiches',
    'Sauces and Condiments',
    'Side Dishes',
    'Smoothies',
    'Soups, Stews, and Chilis',
  ],
  season: [
    'Spring',
    'Easter ',
    'Summer',
    'Autumn',
    'Halloween',
    'Thanksgiving',
    'Winter',
    'Christmas',
    'Add More',
  ],

  worldRegion: [
    'Chinese',
    'Indian',
    'Italian',
    'Mexican',
    'Southern',
    'Thai',
    'add more',
  ],

  healthDiet: [
    'Dairy Free',
    'Diabetic',
    'Gluten Free',
    'Low Calorie',
    'Low Carb',
    'Pescatarian',
    'Vegetarian',
    'Vegan',
    'Add More',
  ],
};

// let test = { amount: 1, unit: 'lb', name: 'carrot', sub: [] };
// let testIngr = new Ingredient(test);
//
// console.log(testIngr);

let user1 = new User('Antonia', 'Antonia@mail.com', '1234');
let user2 = new User('Berta', 'Berta@mail.com', 'qwerty');
let user3 = new User('Chris', 'Chris@mail.com', 'qwertz');

// console.log( user1, user2, user3 );

// let recipe1 = new Recipe(
//   mockRecipes[1].title,
//   mockRecipes[1].cookingTime,
//   mockRecipes[1].servingSize,
//   mockRecipes[1].ingredients,
//   mockRecipes[1].instructions,
//   mockRecipes[1].notes,
//   mockRecipes[1].tags,
// );
let recipe2 = new Recipe(mockRecipes[1].title, mockRecipes[1].versions[0]);

let testVersion = {
  id: 2,
  cookingTime: 10,
  servingSize: 4,

  ingredients: [],

  instructions: [],

  notes: [],

  tags: {
    mealType: [],
    dishType: [],
    season: [],
    worldRegion: [],
    healthDiet: [],
  },
};
recipe2.addVersion(testVersion);
// console.log(recipe2.versions);

let testIngredient = {
  amount: 1,
  unit: 'tablespoon',
  name: 'garlic, minced',
  sub: [],
};

console.log('==============');
// console.log(recipe2.getVersionIndex(testVersion));

recipe2.addIngredient(testVersion, testIngredient);
console.log(recipe2.versions);

// TESTS
// addVersion: works
// addIngredient: works
// getVersion: works
// getVersionID: works
