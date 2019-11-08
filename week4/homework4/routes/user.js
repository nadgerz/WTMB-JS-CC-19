const express = require('express');
const router = express.Router();
const UserService = require('../services/user-service');


router.get('/users', async (req, res) => {
  const users = await UserService.findAll();
  res.render('users', { users });
});


router.get(`/user/:id`, async (request, response) => {
  const id = request.params.id;
  const users = await UserService.findAll();

  if (id < 1 || id > users.length) {
    return;
  }
  const user = users[id - 1];
  response.render('user', { user, users });
});

router.post(`/new-user`, async (request, response) => {
  const user = await UserService.add(request.body);
  if (!user) {
    response.send('please try again');
    return;
  }
  response.render('user', { user });
});

router.delete(`/del-user/:id`, async (request, response) => {
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

// axios.post('/user/6/new-recipe',{title: 'Wet Cat Food', version: {servingSize: 1}})
router.post(`/user/:id/new-recipe`, async (request, response) => {
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

  response.redirect(`/user/${id}`);
});

router.get(`/user/:id/recipe/:rid`, async (request, response) => {
  const { id, rid } = request.params;
  const users = await UserService.findAll();

  if (id < 1 || id > users.length) {
    response.send('out of bounds');
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

router.delete(`/user/:id/recipe/:rid`, async (request, response) => {
  const { id, rid } = request.params;

  const users = await UserService.findAll();

  if (id < 1 || id > users.length) {
    response.send('out of bounds');
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


// GET person by querystring
// queryString => query property on the request object
// queryString: localhost:3000/userperson?name=thomas&age=20
// ampersand creates extra key-value pairs
// router.get('/userpersons', (req, res) => {
//   const name = req.query.name;
//   if (name) {
//     res.send(`You have requested ${name}`)
//   } else {
//     res.send('You have requested a userperson');
//   }
// });

// GET person by Params
// params property on the request object
// router.get('/userperson/:id', (req, res) => {
//   res.send(`You have requested ${req.params.name}`);
// });

// this is going to trigger an exception
// router.get('/error', (req, res) => {
//   throw new Error('this is a forced error')
// });


module.exports = router;