var express = require('express');
var router = express.Router();
var test = require('../controllers/test');

/**
 * Test if server is available
 */
router.get("/server",(req, res) => test.server(req, res));

/**
 * Test if db is available
 */
router.get("/db",(req, res) => test.db(req, res));

module.exports = router;