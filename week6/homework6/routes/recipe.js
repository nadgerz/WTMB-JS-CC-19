const express = require('express');
const router = express.Router();
const HttpStatus = require('http-status-codes');
// const RecipeService = require('../services/recipe-service');


router.get('/test', (req, res) => res.send('Test route for recipe [GET]'));

router.post('/test', (req, res) => res.status(HttpStatus.OK).send('Test route for recipe [POST]'));

//
// router.get('/all', async (req, res) => {
//   const recipes = await RecipeService.findAll();
//   res.send(recipes);
//   // res.render('users', { users });
// });
//
//
// router.delete('/all', async (req, res) => {
//   await RecipeService.delete();
//   console.log(await RecipeService.find().length);
//
//   res.send('USERS PURGED');
// });
//
//
// router.get(`/:id`, async (req, res) => {
//   const id = req.params.id;
//   const user = await RecipeService.findById(id);
//
//   res.send(user);
//   // res.render('user', { user, users });
// });
//
//
// router.post(`/`, async (req, res) => {
//   try {
//     const user = await RecipeService.add(req.body);
//     res.send(user);
//   } catch (err) {
//     console.error(err.message);
//   }
// });
//
//
// router.delete(`/:id`, async (req, res) => {
//   const id = req.params.id;
//   await RecipeService.deleteById(id);
//
//   res.send('ok');
// });


module.exports = router;
