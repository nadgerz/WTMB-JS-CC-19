const Ingredient = require('./ingredient');

const Version = class {
  constructor(
    {
      cookingTime = 0,
      servingSize = 0,
      instructions = [],
      notes = [],
      tags = [],
    },
    id,
  ) {
    this.id = id;
    this.cookingTime = cookingTime;
    this.servingSize = servingSize;
    this.instructions = instructions;
    this.notes = notes;
    this.tags = tags;
    this.ingredients = [];
  }

  saveIngredients(ingredients) {
    this.ingredients = ingredients.map(
      ingredient => new Ingredient(ingredient),
    );
  }

  static create({
    cookingTime,
    servingSize,
    ingredients,
    instructions,
    notes,
    tags,
    id,
  }) {
    const version = new Version(
      { cookingTime, servingSize, instructions, notes, tags },
      id,
    );

    version.ingredients = ingredients.map(ingredient =>
      Ingredient.create(ingredient),
    );

    return version;
  }
};

module.exports = Version;
