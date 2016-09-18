var utils = require('./utils');
var grid = require('../khl4/grid');

/**
 * List grids
 *
 * @param req
 * @param res
 */
var list = function (req, res) {
    var query = utils.getQuery(req);
    grid.list(function (err, result) {
        if (err) {
            console.log(err);
        }
        utils.writeJsonp(res, query["callback"], result)
    });
};


module.exports = {
    list: list
};
