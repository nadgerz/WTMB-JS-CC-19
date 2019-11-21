/* eslint-disable */

const BaseService = require('./base-service');
const RecipeModel = require('../models/recipe');

class RecipeService extends BaseService {
  model = RecipeModel;

  // constructor() {
  //   super(RecipeModel);
  // }
}

module.exports = new RecipeService();

// var Person = mongoose.model('Person', yourSchema);
//
// // find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
// Person.findOne({ 'name.last': 'Ghost' }, 'name occupation', function (err, person) {
//   if (err) return handleError(err);
//   // Prints "Space Ghost is a talk show host".
//   console.log('%s %s is a %s.', person.name.first, person.name.last,
//     person.occupation);
// });
//
// Now let's look at what happens when no callback is passed:
//
// // find each person with a last name matching 'Ghost'
// var query = Person.findOne({ 'name.last': 'Ghost' });
//
// // selecting the `name` and `occupation` fields
// query.select('name occupation');
//
// // execute the query at a later time
// query.exec(function (err, person) {
//   if (err) return handleError(err);
//   // Prints "Space Ghost is a talk show host."
//   console.log('%s %s is a %s.', person.name.first, person.name.last,
//     person.occupation);
// });
