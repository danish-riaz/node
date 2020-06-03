const Product = require('../Models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product',
        {
            pageTitle: 'Add Product',
            path: '/admin/add-product'
        });
}

exports.postProducts = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.showProducts = (req, res, next) => {
    const products = Product.fetchAll();
    res.render('shop',
        {
            pageTitle: 'Products',
            prods: products,
            path: '/'
        })
}