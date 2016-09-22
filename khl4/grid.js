var mongojs = require('mongojs');
var db = mongojs('localhost/khl', ['grids']);

/**
 * List all gids
 *
 * @param callback
 */
var list = function (callback) {
    db.grids.find({},{name:1,grid_id:1}, callback);
};

/**
 * Find a grid by id
 *
 * @param grid_id
 * @param callback
 */
var find = function (grid_id, callback) {
    db.grids.find({grid_id:grid_id}, callback);
};


module.exports = {
    list: list,
    find: find
};