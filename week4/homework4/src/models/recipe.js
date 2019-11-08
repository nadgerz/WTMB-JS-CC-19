const uuid = require('uuid/v1');
const Version = require('./version');
// const RecipeService = require('../services/recipe-service');

module.exports = class Recipe {
  constructor(title, id, dateCreated) {
    this.title = title;
    this.id = id || uuid();
    this.dateCreated = dateCreated || new Date();
    this.versions = [];

    // this.images = [] // TODO: implement an images array
  }

  saveVersion(recipeDetails) {
    // console.log('RECIPE');
    const allItems = this.versions;
    const lastItem = allItems[allItems.length - 1];
    // const lastItem = (allItems.length > 0 ? allItems[allItems.length - 1] : 0 );
    const lastItemsId = (lastItem && lastItem.id) || 0;

    let version = new Version(recipeDetails, lastItemsId + 1);

    // console.log(version.ingredients);
    // console.log('version.ingredients.length');
    // console.log(version.ingredients.length);

    // if ingredients were provided AND they're not just an empty array
    if (recipeDetails.ingredients && recipeDetails.ingredients.length > 0) {
      version.saveIngredients(recipeDetails.ingredients);
    }

    this.versions.push(version);
  }

  getVersion(versionNo) {
    // add check: does the version exist?
    return this.versions[versionNo - 1];
  }

  // newVersion(currentId) {
  //   console.log('new Version ===================');
  //   console.log(this.getVersion(currentId));
  // }

  deleteVersionById(id) {
    this.versions = this.versions.filter(version => version.id !== id);

    // RecipeService.update(this);
  }

  static create({ title, id, dateCreated, versions }) {
    const recipe = new Recipe(title, id, dateCreated);

    recipe.versions = versions.map(version => Version.create(version));

    return recipe;
  }
};
