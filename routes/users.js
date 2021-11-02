const express = require('express');
const UsersService = require('../services/users');

const router = express.Router();
const service = new UsersService();

router.get('/', async (request, response) => {
  try {
    const usersQuantity = await service.findVipUsers();
    response.send({
      users: usersQuantity,
    });
  } catch (error) {
    response.json({
      message: error.message,
    })
  }
});

module.exports = router;
