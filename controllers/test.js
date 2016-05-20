var utils = require('./utils');
var recorder = require('../khl4/recorder');
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
        recorder.count(function (err, result) {
            if (err) {
                console.log(err);
            }
            utils.writeJsonp(res, query["callback"], { records: result});
        }); }
}

module.exports = server;