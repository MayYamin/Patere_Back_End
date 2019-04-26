const Product = require('../models/product.model');

exports.get_productlist = function (req, res) {
    Product.find(function (err, product_lists) {
        if(err) {
            return next(err);
        }
        res.send(product_lists);
    });
};

exports.create_product = function (req, res) {
    let product = new Product ({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
    });
    product.save(function(err) {
        if(err) {
            return next(err);
        }
        res.json(req.body)
    })
};

exports.product_detail  = function (req, res) {
    Product.findById(req.params.id, function (err, product_detail){
        if(err) {
            return next(err);
        }
        res.send(product_detail);
    })
};

exports.update_product = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, put) {
        if(err) {
            return next(err);
        }
        res.json(put)
    })
};

exports.delete_product = function (req, res) {
    Product.findByIdAndRemove(req.params.id, req.body, function (err, post){
        if(err) {
            return next(err);
        }
        res.json
    })
};
exports.product = function (req, res) {   
    Product.findOne({ name: req.body.name }, function (err, user) {
        if(err) {
            return next(err);
        }
        res.json(user)
})
}
