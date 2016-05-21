var express = require('express');
var router = express.Router();
var player = require('../controllers/play');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'KHL4 grid' });
});

router.get("/play", function (req, res, next) {
  player.play(req, res);
});

module.exports = router;
