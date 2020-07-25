var express = require('express');
var router = express.Router();
var controller = require('../controllers/monthController');

router.post('/create', function(req, res, next) {
    controller.create(req, res);
});
router.get('/list', function(req, res, next) {
    controller.list(req, res);
});
module.exports = router;
