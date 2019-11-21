const express = require('express');
const router = express.Router();
const HttpStatus = require('http-status-codes');
// const UserService = require('../services/user-service');

router.get('/test', (req, res) => res.send('Test route for users [GET]'));

router.post('/test', (req, res) =>
  res.status(HttpStatus.OK).send('Test route for users [POST]'),
);

//
// router.get('/all', async (req, res) => {
//   try {
//     const users = await UserService.findAll();
//     // console.log('USERS', users);
//     res.send(users);
//   } catch (err) {
//     res.send(err.response.data.message);
//     // res.status(418).send('Database down');
//   }
// });
//
//
// router.get('/', async (req, res) => {
//   try {
//     const query = req.query;
//     const user = await UserService.find(query);
//
//     res.send(user);
//   } catch (err) {
//     res.send(err.response.data.message);
//     // res.status(418).send('Database down');
//   }
// });
//
//
// router.delete('/all', async (req, res) => {
//   try {
//     await UserService.delete();
//     res.send('USERS PURGED');
//   } catch (err) {
//     res.send(err.response.data.message);
//   }
// });
//
// router.get(`/:id`, async (req, res) => {
//   const id = req.params.id;
//   try {
//     const user = await UserService.findById(id);
//     res.send(user);
//     // res.render('user', { user, users });
//   } catch (err) {
//     res.send(err.response.data.message);
//   }
// });
//
//
// router.post(`/`, async (req, res) => {
//   try {
//     const user = await UserService.add(req.body);
//     res.send(user);
//     // res.render('user', { user });
//   } catch (err) {
//     res.send(err.response.data.message);
//     // res.status(418).send(err);
//   }
// });
//
//
// router.delete(`/:id`, async (req, res) => {
//   const id = req.params.id;
//   console.log(typeof req);
//   console.log(req);
//   try {
//     await UserService.deleteById(id);
//     // res.render('users', { users });
//     res.send('ok');
//   } catch (err) {
//     res.send(err.response.data.message);
//   }
// });

module.exports = router;
