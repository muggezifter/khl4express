var utils = require('./utils');
var recorder = require('../khl4/recorder');
var chord = require('../khl4/chord');

var recording = {
    list: function(req, res) {
        var query = utils.getQuery(req);
        recorder.list(function (err, result) {
            if (err) {
                console.log(err);
            }
            utils.writeJsonp(res, query["callback"], result)
        });
    },
    start: function(req, res) {
        var query = utils.getQuery(req);
        recorder.start(function (err, result) {
            if (err) {
                console.log(err);
            }
            utils.writeJsonp(res, query["callback"], result)
        });
    },
    stop: function(req, res) {
        var query = utils.getQuery(req);
        recorder.stop(query['rec_id'], function (err, result) {
            if (err) {
                console.log(err);
            }
            utils.writeJsonp(res, query["callback"], result);
        });
    },
    find: function(req, res) {
        var query = utils.getQuery(req);
        recorder.find(query['rec_id'], function (err, result) {
            if (err) {
                console.log(err);
            }
            utils.writeJsonp(res, query["callback"], result)
        });
    },
    node: function(req, res) {
        var query = utils.getQuery(req);

        if (query['debug']) {
            utils.writeJson(res, chord.compute(query['lat'], query['lon'], Date.now(), true))
        } else {
            var ch = chord.compute(query['lat'], query['lon'], Date.now(), false);
            recorder.record(query['rec_id'], ch, query['lat'], query['lon']);
            utils.writeJsonp(res, query["callback"], ch)
        }
    }
}

module.exports = recording;
