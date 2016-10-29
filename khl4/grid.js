var mongoose = require( 'mongoose' );
var Grid = mongoose.model('Grid');

/**
 * List all gids
 *
 * @param callback
 */
var list = function (callback) {
    Grid.find({},{name:1,grid_id:1}, callback);
};

/**
 * Find a grid by id
 *
 * @param grid_id
 * @param callback
 */
var find = function (grid_id, callback) {
    Grid.find({grid_id:grid_id}, callback);
};


module.exports = {
    list: list,
    find: find
};