var express = require('express');
var router = express.Router();
var player = require('../controllers/play');


/**
 * Show ui
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'KHL4 grid' });
});

/**
 * Play a chord
 */
router.get("/play", function (req, res, next) {
  player.play(req, res);
});

module.exports = router;