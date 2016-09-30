var express = require('express');
var router = express.Router();
var player = require('../controllers/play');


/**
 * Show ui
 */
router.get('/',(req, res) => res.render('index', { title: 'KHL4 grid' }));

/**
 * Play a chord
 */
router.get("/play",(req, res) => player.play(req, res));

module.exports = router;