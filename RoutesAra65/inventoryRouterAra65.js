const express = require('express');
const router = express.Router();

// Controllers
const inventoryController = require("../ControllersAra65/inventoryControllerAra65");

// Inventory routes
router.get('/', inventoryController.getInventory);
router.post('/', inventoryController.updateInventory);

module.exports = router;