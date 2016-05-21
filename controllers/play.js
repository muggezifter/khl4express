var utils = require('./utils');
var pd = require('../khl4/pd');

var player = {
   play: function (req, res) {
        var query = utils.getQuery(req);
        pd.play([].concat(query['n']), [].concat(query['v']));
        utils.writeJsonp(res, query["callback"], { play: "OK"});
    }
}

module.exports = player;