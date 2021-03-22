const express = require('express');
const router = express.Router();

// Controllers
const cartController = require("../ControllersAra65/cartControllerAra65");

// Cart routes
router.get('/', cartController.getCartAra65);
router.post('/', cartController.addItemAra65);
router.delete('/', cartController.removeItemAra65);
router.post('/checkout', cartController.checkout)

module.exports = router;