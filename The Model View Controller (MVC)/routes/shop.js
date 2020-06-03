const express = require('express');
const path = require('path');

const router = express.Router();

const productController = require('../Controllers/products');

router.get('/', productController.showProducts);

module.exports = router;