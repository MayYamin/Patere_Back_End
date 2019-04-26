const express = require('express');
const router =  express.Router();
const user_controller = require('../controllers/user.controller');

router.post('/create_user', user_controller.create_user);
router.post('/login', user_controller.login);
router.get('/get_userlist',user_controller.get_userlist);

module.exports = router;