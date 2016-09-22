var express = require('express');
var router = express.Router();
var grid = require('../controllers/grid');

/**
 * Get a list of grids
 */
router.get("/list", function (req, res, next) {
    grid.list(req, res);
});

/**
 * Find a grid
 */
router.get('/find', function(req, res) {
    grid.find(req, res);
});

module.exports = router;