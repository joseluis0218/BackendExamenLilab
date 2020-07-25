var express = require('express');
var router = express.Router();
var controller = require('../controllers/segmentationController');

router.post('/create', function(req, res, next) {
    controller.create(req, res);
});
router.post('/segment', function(req, res, next) {
    controller.segment(req, res);
});
router.get('/list', function(req, res, next) {
    controller.list(req, res);
});
router.post('/update', function(req, res, next) {
    controller.update(req, res);
});
router.post('/delete', function(req, res, next) {
    controller.delete(req, res);
});
module.exports = router;
