const express = require('express');
const mainRouter = express.Router();

mainRouter.get('/', (req, res) => {
  res.json('HELLO WORLD');
});

module.exports = mainRouter;