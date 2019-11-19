const express = require('express');
const router = express.Router();
const HttpStatus = require('http-status-codes');
const RecipeService = require('../services/recipe-service');

// @route    GET /recipe/test
// @desc     Test route
// @access   Public
router.get('/test', (req, res) => res.send('Test route for recipe [GET]'));

// @route    POST /recipe/test
// @desc     Test route
// @access   Public
router.post('/test', (req, res) => {
  console.log(req.body);
  res.status(HttpStatus.OK).send('Test route for recipe [POST]');
});

// @route    GET /recipe/all
// @desc
// @access   Public
router.get('/all', async (req, res) => {
  const recipes = await RecipeService.findAll();
  res.send(recipes);
  // res.render('users', { users });
});

// @route    DELETE /recipe/all
// @desc
// @access   Public
router.delete('/all', async (req, res) => {
  await RecipeService.delete();
  console.log(await RecipeService.find().length);

  res.send('USERS PURGED');
});

// @route    GET /recipe/:id
// @desc
// @access   Public
router.get(`/:id`, async (req, res) => {
  const id = req.params.id;
  const user = await RecipeService.findById(id);

  res.send(user);
  // res.render('user', { user, users });
});

// @route    POST /recipe/:id
// @desc
// @access   Public
router.post(`/`, async (req, res) => {
  try {
    const user = await RecipeService.add(req.body);
    res.send(user);
    // res.render('user', { user });
  } catch (err) {
    console.error(err.message);
  }
});

// @route    DELETE /recipe/:id
// @desc
// @access   Public
router.delete(`/:id`, async (req, res) => {
  const id = req.params.id;
  await RecipeService.deleteById(id);

  // console.log(typeof req);
  // console.log(req);

  res.send('ok');
  // res.render('users', { users });
});

// ADD a new recipe for a specific user
// axios.post('/user/6/recipe',{title: 'Wet Cat Food', version: {servingSize: 1, cookingTime: 1}})
// router.post(`/:id/recipe`, async (req, res) => {
//   const id = req.params.id;
//   const { title, version } = req.body;
//   const users = await RecipeService.findAll();
//
//   if (id < 1 || id > users.length) {
//     return;
//   }
//
//   const user = users[id - 1];
//   user.saveRecipe(title, version);
//   await RecipeService.update(user);
//
//   res.redirect(`/user/${id}`);
// });

module.exports = router;
