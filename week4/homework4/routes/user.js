const express = require('express');
const router = express.Router();

// GET person by querystring
// queryString => query property on the request object
// queryString: localhost:3000/userperson?name=thomas&age=20
// ampersand creates extra key-value pairs
router.get('/userpersons', (req, res) => {
  const name = req.query.name;
  if (name) {
    res.send(`You have requested ${name}`)
  } else {
    res.send('You have requested a userperson');
  }
});

// GET person by Params
// params property on the request object
router.get('/userperson/:id', (req, res) => {
  res.send(`You have requested ${req.params.name}`);
});

// this is going to trigger an exception
router.get('/error', (req, res) => {
  throw new Error('this is a forced error')
});


module.exports = router;