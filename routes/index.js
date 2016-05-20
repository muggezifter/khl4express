var express = require('express');
var router = express.Router();
var test = require('../controllers/test');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'KHL4 grid' });
});

router.get("/test/server", function (req, res, next) {
   test.server(req, res);
});

router.get("/test/db", function (req, res, next) {
    test.db(req, res);
});

module.exports = router;
