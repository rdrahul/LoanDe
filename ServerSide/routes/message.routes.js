"use strict";

const
    express = require('express'),
    router = express.Router(),
    isAuthenticated = require('../middlewares/is-authenticated'),
    MessageController = require('../controllers/message.controller');

router.get('/', MessageController.getMessages );
router.post('/', MessageController.create);

module.exports = function(app ) {

    app.use('/api/messages', isAuthenticated ,  router);

}