var express = require('express');
var router = express.Router();
var player = require('../controllers/play');


/**
 * Play a chord
 */
router.get("/play",(req, res) => player.play(req, res));

module.exports = router;