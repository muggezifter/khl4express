var express = require('express');
var router = express.Router();
var recording = require('../controllers/recording');

/**
 * Start recording
 */
router.get('/start', function(req, res) {
    recording.start(req, res);
});

/**
 * Stop recording
 */
router.get('/stop', function(req, res) {
    recording.stop(req, res);
});

/**
 * List recordings
 */
router.get('/list', function(req, res) {
    recording.list(req, res);
});

/**
 * Find a recording
 */
router.get('/find', function(req, res) {
    recording.find(req, res);
});

/**
 * Add a mode to a recording
 */
router.get('/node', function(req, res) {
    recording.node(req, res);
});

module.exports = router;
