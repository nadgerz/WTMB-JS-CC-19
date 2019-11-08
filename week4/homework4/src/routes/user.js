const express = require('express');
const router = express.Router();
const UserService = require('../services/user-service');

// GET all users
router.get('/users', async (req, res) => {
  const users = await UserService.findAll();
  res.render('users', { users });
});

// GET a specific user
router.get(`/user/:id`, async (request, response) => {
  const id = request.params.id;
  const users = await UserService.findAll();

  if (id < 1 || id > users.length) {
    return;
  }
  const user = users[id - 1];
  response.render('user', { user, users });
});

// ADD a user
// axios.post('/new-user', {name: 'Fred', email: 'fred@mail.de', password: 'boondocks'})
router.post(`/new-user`, async (request, response) => {
  const user = await UserService.add(request.body);
  if (!user) {
    return;
  }
  response.render('user', { user });
});

// DELETE a user
router.delete(`/del-user/:id`, async (request, response) => {
  const id = request.params.id;
  const users = await UserService.findAll();

  if (id < 1 || id > users.length) {
    return;
  }
  const user = users[id - 1];

  await UserService.delete(user.id);

  response.send('ok');
  // response.render('users', { users });
});

// ADD a new recipe for a specific user
// axios.post('/user/6/new-recipe',{title: 'Wet Cat Food', version: {servingSize: 1, cookingTime: 1}})
router.post(`/user/:id/new-recipe`, async (request, response) => {
  const id = request.params.id;
  const { title, version } = request.body;
  const users = await UserService.findAll();

  if (id < 1 || id > users.length) {
    return;
  }

  const user = users[id - 1];
  user.saveRecipe(title, version);
  await UserService.update(user);

  response.redirect(`/user/${id}`);
});

// get a recipe for a specific user
router.get(`/user/:id/recipe/:rid`, async (request, response) => {
  const { id, rid } = request.params;
  const users = await UserService.findAll();

  if (id < 1 || id > users.length) {
    return;
  }

  const user = users[id - 1];

  if (rid < 1 || rid > user.recipes.length) {
    response.send('out of bounds');
    return;
  }

  const recipeId = user.recipes[rid - 1].id;
  const recipe = user.getRecipeById(recipeId);

  response.render('recipe', { recipe, user });
});

// DELETE a recipe for a user
// axios.delete('user/6/recipe/1')
router.delete(`/user/:id/recipe/:rid`, async (request, response) => {
  const { id, rid } = request.params;

  const users = await UserService.findAll();

  if (id < 1 || id > users.length) {
    return;
  }

  const user = users[id - 1];

  if (rid < 1 || rid > user.recipes.length) {
    return;
  }

  const recipeId = user.recipes[rid - 1].id;
  user.deleteRecipeById(recipeId);
  await UserService.update(user);

  response.render('user', { user });
});


module.exports = router;