var utils = require('./utils');
var pd = require('../khl4/pd');

/**
 * Play a chord
 *
 * @param req
 * @param res
 */
var play = function (req, res) {
        var query = utils.getQuery(req);
        pd.play([].concat(query['n']), [].concat(query['v']));
        utils.writeJsonp(res, query["callback"], { play: "OK"});
    };


module.exports = {
    play : play
};