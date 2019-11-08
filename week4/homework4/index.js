/* eslint-disable */
const Chalk = require('chalk');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const UserService = require('./services/user-service');
const userRoute = require('./routes/user');
const app = express();
// const router = express.Router();

// MIDDLEWARE: the order of functions here matters
// middleware funcs use three parameters
// next is reference to the next func in the pipeline
//
app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`);

  // if you don't respond to req, you have to call next()
  next();
});

// registering the custom route
app.use(userRoute);
// a way to serve static content (middleware)
// will render the index.html file is nothing else is specified
app.use(express.static('public'));

app.set('view engine', 'pug');
app.use(bodyParser.json());

// Handler for 404
app.use((req, res, next) => {

  res.status(404).render(path.join(__dirname, './views/404'));

  // res.status(404).send('404 you are lost');
  // next();
});

// Handler for 500
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.sendFile(path.join(__dirname, './public/500.html'));
//   // next();
// });

const DEFAULT_PORT = 3000;
const PORT = process.env.PORT || DEFAULT_PORT;
app.listen(PORT, () => {
  console.info(`server has started on port ${PORT === DEFAULT_PORT ? PORT : Chalk.bgYellowBright(PORT)}`);
});


app.get('/', (req, res) => {
  // res.sendFile(`${__dirname}/index.html`);
  res.render('index');
});

app.get('/users', async (req, res) => {

  const users = await UserService.findAll();
  res.render('users', { users });
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

  const users = await UserService.findAll();

  if (id < 1 || id > users.length) {
    response.send('out of bounds');
    console.log('out of bounds');
    return;
  }

  const user = users[id - 1];

  if (rid < 1 || rid > user.recipes.length) {
    response.send('out of bounds');
    return;
  }

  const recipeId = user.recipes[rid - 1].id;
  user.deleteRecipeById(recipeId);
  await UserService.update(user);

  response.render('user', { user });
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
