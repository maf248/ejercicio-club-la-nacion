// Importing modules
const express = require('express');
const router = express.Router();

// Importing controller
const apiController = require('../controllers/apiController');

// Setting routes
router.get('/', apiController.index);

module.exports = router;
