const express = require('express');
const router = express.Router();
const UserService = require('../services/user-service');

// GET all users
router.get('/users', async (req, res) => {
  const users = await UserService.findAll();
  res.render('users', { users });
});

// GET a specific user
router.get(`/user/:id`, async (req, res) => {
  const id = req.params.id;
  const users = await UserService.findAll();

  if (id < 1 || id > users.length) {
    return;
  }
  const user = users[id - 1];
  res.render('user', { user, users });
});

// ADD a user
// axios.post('/user', {name: 'Fred', email: 'fred@mail.de', password: 'boondocks'})
router.post(`/user`, async (req, res) => {
  const user = await UserService.add(req.body);
  if (!user) {
    return;
  }
  res.render('user', { user });
});

// DELETE a user

router.delete(`/user/:id`, async (req, res) => {
  const id = req.params.id;
  const users = await UserService.findAll();

  if (id < 1 || id > users.length) {
    return;
  }
  const user = users[id - 1];

  await UserService.delete(user.id);

  res.send('ok');
  // res.render('users', { users });
});

// ADD a new recipe for a specific user
// axios.post('/user/6/recipe',{title: 'Wet Cat Food', version: {servingSize: 1, cookingTime: 1}})
router.post(`/user/:id/recipe`, async (req, res) => {
  const id = req.params.id;
  const { title, version } = req.body;
  const users = await UserService.findAll();

  if (id < 1 || id > users.length) {
    return;
  }

  const user = users[id - 1];
  user.saveRecipe(title, version);
  await UserService.update(user);

  res.redirect(`/user/${id}`);
});

// get a recipe for a specific user
router.get(`/user/:id/recipe/:rid`, async (req, res) => {
  const { id, rid } = req.params;
  const users = await UserService.findAll();

  if (id < 1 || id > users.length) {
    return;
  }

  const user = users[id - 1];

  if (rid < 1 || rid > user.recipes.length) {
    return;
  }

  const recipeId = user.recipes[rid - 1].id;
  const recipe = user.getRecipeById(recipeId);

  res.render('recipe', { recipe, user });
});

// DELETE a recipe for a user
// axios.delete('user/6/recipe/1')
router.delete(`/user/:id/recipe/:rid`, async (req, res) => {
  const { id, rid } = req.params;

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

  res.render('user', { user });
});

module.exports = router;
