var express = require('express');
var router = express.Router();
var recording = require('../controllers/recording');

router.get('/start', function(req, res) {
    recording.start(req, res);
});

router.get('/stop', function(req, res) {
    recording.stop(req, res);
});

router.get('/list', function(req, res) {
    recording.list(req, res);
});

router.get('/find', function(req, res) {
    recording.find(req, res);
});


router.get('/node', function(req, res) {
    recording.node(req, res);
});

module.exports = router;
