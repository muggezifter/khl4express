var express = require('express');
var router = express.Router();
var recording = require('../controllers/recording');

/**
 * Start recording
 */
router.get('/start',(req, res) => recording.start(req, res));

/**
 * Stop recording
 */
router.get('/stop',(req, res) => recording.stop(req, res));

/**
 * List recordings
 */
router.get('/list',(req, res) => recording.list(req, res));

/**
 * Find a recording
 */
router.get('/find',(req, res) => recording.find(req, res));

/**
 * Add a mode to a recording
 */
router.get('/node',(req, res) => recording.node(req, res));

module.exports = router;
