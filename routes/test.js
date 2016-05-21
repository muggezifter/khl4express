var express = require('express');
var router = express.Router();
var test = require('../controllers/test');

router.get("/server", function (req, res, next) {
    test.server(req, res);
});

router.get("/db", function (req, res, next) {
    test.db(req, res);
});

module.exports = router;