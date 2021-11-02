const express = require('express');

const ordersRouter = require('./orders.js');
const usersRouter = require('./users.js');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/orders', ordersRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
