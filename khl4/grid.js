var mongojs = require('mongojs');
var db = mongojs('localhost/khl', ['grids']);

/**
 * List all recordings
 *
 * @param callback
 */
var list = function (callback) {
    db.grids.find({},{name:1}, callback);
};


module.exports = {
    list: list
};