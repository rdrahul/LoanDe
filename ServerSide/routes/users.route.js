"use strict";

const
    express = require('express'),
    router = express.Router(),
    UserController = require('../controllers/user.controller');


router.get('/', UserController.getUsers);
router.post('/', UserController.createUser);

module.exports = function(app ) {

    app.use('/api/users', router);

}