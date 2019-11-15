// const Version = require('./version');
// const RecipeService = require('../services/recipe-service');
const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 2,
  },
  // dateCreated: {
  //   default: Date.now,
  // },

  // versions: [{
  //   type: mongoose.SchemaTypes.ObjectId,
  //   ref: 'Version',
  //   autopopulate: {
  //     maxDepth: 1,
  //   },
  // }],
});

// RecipeSchema.plugin(require('mongoose-autopopulate'));

const RecipeModel = mongoose.model('recipe', RecipeSchema);

module.exports = RecipeModel;

// saveVersion(recipeDetails) {
//   const allItems = this.versions;
//   const lastItem = allItems[allItems.length - 1];
//   const lastItemsId = (lastItem && lastItem.id) || 0;
//
//   let version = new Version(recipeDetails, lastItemsId + 1);
//
//   // if ingredients were provided AND they're not just an empty array
//   if (recipeDetails.ingredients && recipeDetails.ingredients.length > 0) {
//     version.saveIngredients(recipeDetails.ingredients);
//   }
//   this.versions.push(version);
// }
//
// getVersion(versionNo) {
//   // add check: does the version exist?
//   return this.versions[versionNo - 1];
// }
//
// deleteVersionById(id) {
//   this.versions = this.versions.filter(version => version.id !== id);
//
//   // RecipeService.update(this);
// }
//
// static create({ title, id, dateCreated, versions }) {
//   const recipe = new Recipe(title, id, dateCreated);
//
//   recipe.versions = versions.map(version => Version.create(version));
//
//   return recipe;
// }
