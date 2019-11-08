/* eslint-disable */
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
// const router = express.Router();

const UserService = require('./services/user-service');


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
    return;
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
  const user = users[id - 1];

  await UserService.delete(user.id);

  response.send('ok');
  // response.render('users', { users });
});

// axios.post('/user/6/new-recipe',{title: 'Cat Food', version: {servingSize: 1}})
app.post(`/user/:id/new-recipe`, async (request, response) => {
  const id = request.params.id;
  const { title, version } = request.body;
  const users = await UserService.findAll();

  if (id < 1 || id > users.length) {
    response.send('out of bounds');
    return;
  }

  const user = users[id - 1];
  user.saveRecipe(title, version);
  await UserService.update(user);

  response.render('user', { user });
});

app.delete(`/user/:id/recipe/:rid`, async (request, response) => {
  const { id, rid } = request.params;
  // console.log(request.params.id, request.params.rid);
  // console.log(request.params);
  console.log('params');
  console.log(id, rid);

  // const version = (request.body.version);
  // const users = await UserService.findAll();
  //
  // if (id < 1 || id > users.length) {
  //   response.send('out of bounds');
  //   return;
  // }
  //
  // const user = users[id-1];
  // user.saveRecipe(recipeTitle, version);
  // await UserService.update(user);
  //
  // response.render('user', { user });
  response.send(request.params);
});


// axios.get
// fetching

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
