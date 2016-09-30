var express = require('express');
var router = express.Router();
var grid = require('../controllers/grid');

/**
 * Get a list of grids
 */
router.get("/list",(req, res) => grid.list(req, res));

/**
 * Find a grid
 */
router.get('/find',(req, res) => grid.find(req, res));

module.exports = router;