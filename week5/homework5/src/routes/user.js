const express = require('express');
const router = express.Router();
const HttpStatus = require('http-status-codes');
const UserService = require('../services/user-service');

// @route    GET /user/test
// @desc     Test route
// @access   Public
router.get('/test', (req, res) => res.send('Test route for users [GET]'));

// @route    POST /user/test
// @desc     Register user
// @access   Public
router.post('/test', (req, res) => {
  console.log(req.body);

  // TODO SAI: dunno what todo wit this statuses
  res.status(HttpStatus.OK).send('Test route for users [POST]');
});

// @route    GET /user/all
// @desc
// @access   Public
router.get('/all', async (req, res) => {
  const users = await UserService.findAll();
  res.send(users);
  // res.render('users', { users });
});

// @route    GET /user/:id
// @desc
// @access   Public
router.get(`/:id`, async (req, res) => {
  const id = req.params.id;
  const user = await UserService.findById(id);

  res.send(user);
  // res.render('user', { user, users });
});

// ADD a user
// axios.post('/user', {name: 'Fred', email: 'fred@mail.de', password: 'boondocks'})
router.post(`/`, async (req, res) => {
  try {
    const user = await UserService.add(req.body);
    res.send(user);
    // res.render('user', { user });
  } catch (err) {
    console.error(err.message);
  }
});

// DELETE a user

router.delete(`/:id`, async (req, res) => {
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
router.post(`/:id/recipe`, async (req, res) => {
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
router.get(`/:id/recipe/:rid`, async (req, res) => {
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
router.delete(`/:id/recipe/:rid`, async (req, res) => {
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
