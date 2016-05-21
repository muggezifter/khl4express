var mongojs = require('mongojs');
var moment = require('moment');

var db = mongojs('localhost/khl', ['recordings']);

/**
 * Start recording
 *
 * @param callback
 */
var start = function (callback) {
    var data = {
        recording_id: 'R' + moment().valueOf(),
        description: '',
        starttime: moment().unix(),
        endtime: null,
        nodes: []
    }

    db.recordings.insert(data, callback);
};

/**
 * Stop recording
 *
 * @param rec_id
 * @param callback
 */
var stop = function (rec_id, callback) {
    db.recordings.update({recording_id: rec_id}, {$set: {endtime: moment().unix()}}, {}, callback);
}

/**
 * Add a node to a recording
 *
 * @param rec_id
 * @param ch
 * @param lat
 * @param lon
 */
var record = function (rec_id, ch, lat, lon) {
    var nd = {
        timestamp: moment().unix(),
        lat: lat,
        lon: lon,
        chord: ch
    };
    db.recordings.update({recording_id: rec_id}, {$push: {nodes: nd}});
};

/**
 * Count the recordings
 *
 * @param callback
 */
var count = function (callback) {
    db.recordings.count(callback);
};

/**
 * Find a recording by id
 *
 * @param rec_id
 * @param callback
 */
var find = function (rec_id, callback) {
    db.recordings.find({recording_id: rec_id}, callback);
};

/**
 * List all recordings
 *
 * @param callback
 */
var list = function (callback) {
    db.recordings.find({description: {$not: {$type: 10}}}, {nodes: 0}, callback);
};


module.exports = {
    start: start,
    stop: stop,
    count: count,
    record: record,
    find: find,
    list: list
};
