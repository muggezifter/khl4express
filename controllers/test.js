var utils = require('./utils');

var server = {
    /**
     * Respond that server is available
     */
    server: function (req, res) {
        var query = utils.getQuery(req);
        utils.writeJsonp(res, query["callback"], { status: "OK"});
    },

    /**
     * Check if db is available
     */
    db: function (req, res) {
        var query = utils.getQuery(req);
        utils.writeJsonp(res, query["callback"], { status: "OK"});
    }
}

module.exports = server;