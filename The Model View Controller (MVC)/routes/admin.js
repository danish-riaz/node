const express = require('express');

const productController = require('../Controllers/products');

const router = express.Router();

router.get('/add-product', productController.getAddProduct);

router.post('/product', productController.postProducts);

module.exports = router;