const express = require('express');
const router = express.Router();
const UserService = require('../services/user-service');

// const litmusRouter = require('./litmus');

const litmusResponseMsg = req =>
  `Test route for ${req.originalUrl} [${req.method}]`;

router.get('/litmus', (req, res) => res.send(litmusResponseMsg(req)));
router.post('/litmus', (req, res) => res.send(litmusResponseMsg(req)));
router.delete('/litmus', (req, res) => res.send(litmusResponseMsg(req)));
router.put('/litmus', (req, res) => res.send(litmusResponseMsg(req)));

router.get('/all', async (req, res) => {
  // res.send([]);
  try {
    const users = await UserService.findAll();
    res.send(users);
  } catch (err) {
    res.send(err.response.data.message);
  }
});

router.post(`/`, async (req, res) => {
  try {
    const user = await UserService.add(req.body);
    res.send(user);
    // res.render('user', { user });
  } catch (err) {
    res.send(err.response.data.message);
  }
});

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
