const express = require('express');
const router =  express.Router();
const product_controller = require('../controllers/product.controller');
const user_controller = require('../controllers/user.controller');

router.get('/get_product_list', product_controller.get_productlist);
router.post('/create', product_controller.create_product);
router.get('/get_by_productId/:id', product_controller.product_detail);
router.post('/:id/update', product_controller.update_product);
router.delete('/:id/delete', product_controller.delete_product);
router.post('/producttest', product_controller.product);

module.exports = router;
