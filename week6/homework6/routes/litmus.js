const express = require('express');
const router = express.Router();

router.get('/litmus', (req, res) => {
  res.send(`Test route for ${req.originalUrl} [GET]\n`);
});

router.post('/litmus', (req, res) => {
  res.send(`Test route for ${req.originalUrl} [POST]\n`);
});

router.delete('/litmus', (req, res) => {
  res.send(`Test route for ${req.originalUrl} [DELETE]\n`);
});

router.put('/litmus', (req, res) => {
  res.send(`Test route for ${req.originalUrl} [PUT]\n`);
});

module.exports = router;
