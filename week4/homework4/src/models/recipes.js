// title, versions = [], id, dateCreated

const misoOrangeSalmon = {
  id: '1mos',
  dateCreated: new Date(),
  title: 'Miso Orange Salmon',
  versions: [
    {
      id: 1,
      cookingTime: 30,
      servingSize: 3,

      ingredients: [
        { id: 1, amount: 3, unit: '', name: 'salmon fillets', sub: [] },
      ],

      instructions: ['Set oven to 420F.'],

      notes: ['Notes for next time'],

      tags: {
        mealType: ['Lunch', 'Dinner'],
        dishType: ['Fish Recipes'],
        season: [''],
        worldRegion: [''],
        healthDiet: ['fish'],
      },
    },
  ],
};

const garlickyAsparagus = {
  id: '2ga',
  dateCreated: new Date(),
  title: 'Garlicky Asparagus OR Green Beans',

  versions: [
    {
      id: 1,
      cookingTime: 15,
      servingSize: 3,

      ingredients: [
        { amount: 0, unit: '', name: 'olive oil spray', sub: [] },
        { amount: 1, unit: 'bundle (15 spears)', name: 'asparagus', sub: [] },
      ],

      instructions: [
        'Continue to cook until the asparagus turns a vibrant green color and the spears are crisp-tender.',
      ],

      notes: ['try Beans on next try'],

      tags: {
        mealType: ['Lunch', 'Dinner'],
        dishType: ['Side Dish'],
        season: ['Spring'],
        worldRegion: [],
        healthDiet: ['vegetarian', 'vegan', 'gluten-free'],
      },
    },
  ],
};

const honeyLemonShrimp = {
  id: '3hls',
  dateCreated: new Date(),
  title: 'Honey Lemon Shrimp Recipe With Veggies',
  versions: [
    {
      id: 1,
      cookingTime: 45,
      servingSize: 4,

      ingredients: [
        { amount: 0, unit: '', name: 'Sauce', sub: [] },
        { amount: 1.5, unit: 'lb', name: 'raw shrimp', sub: [] },
      ],

      instructions: [
        'Build the meals by evenly dividing the ingredients by 4, or your number of servings.',
      ],

      notes: [],

      tags: {
        mealType: ['Lunch', 'Dinner'],
        dishType: ['Fish Recipe'],
        season: [],
        worldRegion: [],
        healthDiet: ['Pescatarian'],
      },
    },
  ],
};

const recipes = [misoOrangeSalmon, garlickyAsparagus, honeyLemonShrimp];
module.exports = recipes;
