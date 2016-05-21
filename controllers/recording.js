var utils = require('./utils');
var recorder = require('../khl4/recorder');
var chord = require('../khl4/chord');


/**
 * List recordings
 *
 * @param req
 * @param res
 */
var list = function (req, res) {
    var query = utils.getQuery(req);
    recorder.list(function (err, result) {
        if (err) {
            console.log(err);
        }
        utils.writeJsonp(res, query["callback"], result)
    });
};

/**
 * Start recording
 *
 * @param req
 * @param res
 */
var start = function (req, res) {
    var query = utils.getQuery(req);
    recorder.start(function (err, result) {
        if (err) {
            console.log(err);
        }
        utils.writeJsonp(res, query["callback"], result)
    });
};

/**
 * Stop recording
 *
 * @param req
 * @param res
 */
var stop = function (req, res) {
    var query = utils.getQuery(req);
    recorder.stop(query['rec_id'], function (err, result) {
        if (err) {
            console.log(err);
        }
        utils.writeJsonp(res, query["callback"], result);
    });
};

/**
 * Find recording
 *
 * @param req
 * @param res
 */
var find = function (req, res) {
    var query = utils.getQuery(req);
    recorder.find(query['rec_id'], function (err, result) {
        if (err) {
            console.log(err);
        }
        utils.writeJsonp(res, query["callback"], result)
    });
};

/**
 * Add a node to the recording
 *
 * @param req
 * @param res
 */
var node = function (req, res) {
    var query = utils.getQuery(req);

    if (query['debug']) {
        utils.writeJson(res, chord.compute(query['lat'], query['lon'], Date.now(), true))
    } else {
        var ch = chord.compute(query['lat'], query['lon'], Date.now(), false);
        recorder.record(query['rec_id'], ch, query['lat'], query['lon']);
        utils.writeJsonp(res, query["callback"], ch)
    }
};


module.exports = {
    start: start,
    stop: stop,
    list: list,
    find: find,
    node: node
};

