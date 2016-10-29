var mongoose = require( 'mongoose' );
var Recording = mongoose.model('Recording');
var Knot = mongoose.model('Knot');
var moment = require('moment');


/**
 * Start recording
 *
 * @param grid_id
 * @param callback
 */
var start = function (grid_id, callback) {
    Recording.create({
        recording_id: 'R' + moment().valueOf(),
        grid_id: grid_id,
        description: '',
        starttime: moment().unix(),
        endtime: null
    }, callback );
};

/**
 * Stop recording
 *
 * @param rec_id
 * @param callback
 */
var stop = function (rec_id, callback) {
   Recording.update({recording_id: rec_id}, {$set: {endtime: moment().unix()}}, {}, callback);
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
    Knot.create({
        rec_id: rec_id,
        date: Date.now(),
        lat: lat,
        lon: lon,
        chord: ch
    }, function (err, result) {
        if (err) {
            console.log(err);
        }
    });
};

/**
 * Count the recordings
 *
 * @param callback
 */
var count = function (callback) {
    Recording.count(callback);
};

/**
 * Find a recording by id
 *
 * @param rec_id
 * @param callback
 */
var find = function (rec_id, callback) {
    Recording.find({recording_id: rec_id}, callback);
};

/**
 * List all recordings
 *
 * @param callback
 */
var list = function (callback) {
    Recording.find({description: {$not: {$type: 10}}}, callback);
};


module.exports = {
    start: start,
    stop: stop,
    count: count,
    record: record,
    find: find,
    list: list
};
