// Importing modules
const express = require('express');
const router = express.Router();

// Importing API controller
const apiController = require('../controllers/apiController');

// Setting API routes
router.get('/', apiController.index);

router.get('/tourism', apiController.tourism);

router.get('/discount', apiController.discount);

module.exports = router;
