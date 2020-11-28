const express = require('express');
const mainRouter = express.Router();
const db = require('../db');

mainRouter.get('/', (req, res) => {
  res.json('HELLO WORLD');
});
mainRouter.get('/post', (req, res) => {
  db.query('SELECT * FROM post', (err, result) => {
      res.send(result)
  })
})

module.exports = mainRouter;