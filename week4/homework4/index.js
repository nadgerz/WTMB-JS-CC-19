/* eslint-disable */
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const UserService = require('./services/user-service');
// const User = require('./models/user');


app.set('view engine', 'pug');
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('listening');
});

app.get('/', (request, response) => {
  // response.sendFile(`${__dirname}/index.html`);
  response.render('index');
});

app.get('/users', async (request, response) => {

  const users = await UserService.findAll();
  response.render('users', { users });
});

app.get(`/user/:id`, async (request, response) => {
  const id = request.params.id;
  const users = await UserService.findAll();

  if (id < 1 || id > users.length) {
    response.render('404');
    return;
  }
  const user = users[id - 1];
  response.render('user', { user });
});

app.post(`/new-user`, async (request, response) => {
  const user = await UserService.add(request.body);
  if (!user) {
    response.send('please try again');
  }
  response.render('user', { user });
});

app.delete(`/del-user/:id`, async (request, response) => {
  const id = request.params.id;
  const users = await UserService.findAll();

  if (id < 1 || id > users.length) {
    response.send('out of bounds');
    return;
  }
  const user = users[id-1];

  await UserService.delete(user.id);

  response.send('ok');
  // response.render('users', { users });
});

// axios.get

//
// // let [recipe1, recipe2, recipe3] = mockRecipes;
//
// // CREATING USERS
// // let user1 = new User('Antonia', 'Antonia@mail.com', '1234');
// // let user2 = new User('Berta', 'Berta@mail.com', 'qwerty');
// // let user3 = new User('Chris Christofferson', 'Chris@mail.com', 'qwertz');
//
// // ADDING USERS to DATABASE
// // await UserService.add(user1);
// // await UserService.add(user2);
// // await UserService.add(user3);
//
// // RETRIEVING USERS FROM DATABASE
// const [user1, user2, user3] = await UserService.findAll();
// // console.log(user1, user2, user3);
//
// // ADDING A RECIPE TO A USER
// // CREATING A VERSION FOR A RECIPE
// const eggVersion1 = {
//   cookingTime: 7,
//   ingredients: [],
// };
// // user1.saveRecipe('eggs', eggVersion1);
// // await UserService.update(user1);
// // console.log(user1);
//
// // CREATING MORE VERSIONS FOR A RECIPE
// const eggVersion2 = {
//   cookingTime: 8.5,
//   ingredients: [],
// };
//
// const eggVersion3 = {
//   cookingTime: 5,
//   ingredients: [],
// };
//
// const eggVersion4 = {
//   cookingTime: 10,
//   ingredients: [],
// };
//
// // ADDING VERSIONS TO AN EXISTING RECIPE
// const eggRecipe = user1.getRecipeById(user1.recipes[0].id);
// // eggRecipe.saveVersion(eggVersion2);
// // eggRecipe.saveVersion(eggVersion3);
// // eggRecipe.saveVersion(eggVersion4);
// // console.log(eggRecipe);
// // await UserService.update(user1);
//
// // DELETING A VERSION
// // eggRecipe.deleteVersionById(3);
// // console.log(eggRecipe);
// // await UserService.update(user1);
//
// // ADDING AN INGREDIENT
// const eggIngredients = [
//   {
//     amount: 1,
//     name: 'egg',
//   },
// ];
//
// // SAVING AN INGREDIENT TO AN EXISTING VERSION
// const eggRecipeVersion1 = eggRecipe.versions[0];
// // eggRecipeVersion1.saveIngredients(eggIngredients);
// // console.log(eggRecipeVersion1);
// // await UserService.update(user1);
//
// console.log(user1.recipes);
// // console.log(user1, user2, user3);
