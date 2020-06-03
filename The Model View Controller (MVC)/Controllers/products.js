const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-product',
        {
            pageTitle: 'Add Product',
            path: '/admin/add-product'
        });
}

exports.postProducts = (req, res, next) => {
    products.push({ title: req.body.title })
    res.redirect('/');
}

exports.showProducts = (req, res, next) => {
    res.render('shop',
        {
            pageTitle: 'Products',
            prods: products,
            path: '/'
        })
}