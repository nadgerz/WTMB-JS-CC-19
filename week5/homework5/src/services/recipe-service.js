const BaseService = require('./base-service');
const RecipeModel = require('../models/recipe');

class RecipeService extends BaseService {
  model = RecipeModel;

  // constructor() {
  //   super(RecipeModel);
  // }
}

module.exports = new RecipeService();
