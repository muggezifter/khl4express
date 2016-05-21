var express = require('express');
var router = express.Router();
var test = require('../controllers/test');

/**
 * Test if server is available
 */
router.get("/server", function (req, res, next) {
    test.server(req, res);
});

/**
 * Test if db is available
 */
router.get("/db", function (req, res, next) {
    test.db(req, res);
});

module.exports = router;