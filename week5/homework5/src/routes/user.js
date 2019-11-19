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
  // console.log('user route: REQ:');
  // console.log(req);
  // body, route {path, stack, methods}
  // connection, socket, res : ServerResponse, params, query
  // url, method, statusMessage

  // console.log('user route: RES:');
  // console.log(res);
  // params, query, body, res, route, baseUrl: /user, originalUrl: /user/test, next(),
  // url, method: POST,

  res.status(HttpStatus.OK).send('Test route for users [POST]');
});

// @route    GET /user/all
// @desc
// @access   Public
router.get('/all', async (req, res) => {
  try {
    const users = await UserService.findAll();
    // console.log('USERS', users);
    res.send(users);
  } catch (err) {
    res.send(err.response.data.message);
    // res.status(418).send('Database down');
  }
});

// @route    GET /user/?query
// @desc
// @access   Public
router.get('/', async (req, res) => {
  try {
    const query = req.query;
    const user = await UserService.find(query);

    res.send(user);
  } catch (err) {
    res.send(err.response.data.message);
    // res.status(418).send('Database down');
  }
});

// @route    DELETE /user/all
// @desc
// @access   Public
router.delete('/all', async (req, res) => {
  try {
    await UserService.delete();
    res.send('USERS PURGED');
  } catch (err) {
    res.send(err.response.data.message);
  }
});

// @route    GET /user/:id
// @desc
// @access   Public
router.get(`/:id`, async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserService.findById(id);
    res.send(user);
    // res.render('user', { user, users });
  } catch (err) {
    res.send(err.response.data.message);
  }
});

// @route    POST /user/:id
// @desc
// @access   Public
router.post(`/`, async (req, res) => {
  try {
    const user = await UserService.add(req.body);
    res.send(user);
    // res.render('user', { user });
  } catch (err) {
    res.send(err.response.data.message);
    // res.status(418).send(err);
  }
});

// @route    DELETE /user/:id
// @desc
// @access   Public
router.delete(`/:id`, async (req, res) => {
  const id = req.params.id;
  console.log(typeof req);
  console.log(req);
  try {
    await UserService.deleteById(id);
    // res.render('users', { users });
    res.send('ok');
  } catch (err) {
    res.send(err.response.data.message);
  }
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
