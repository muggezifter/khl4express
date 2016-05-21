var url = require('url');

/**
 * Get array of query parameters from the request
 *
 * @param req
 * @returns {*}
 */
var getQuery = function (req) {
    var url_parts = url.parse(req.url, true);
    return url_parts.query;
};

/**
 * Write output as jsonp (for app)
 *
 * @param res
 * @param callback
 * @param data
 */
var writeJsonp = function (res, callback, data) {
    res.writeHead(200, {'Content-Type': 'application/javascript'});
    res.end(callback + "(" + JSON.stringify(data) + ")");
};

/**
 * Write output as json (for debug)
 *
 * @param res
 * @param data
 */
var writeJson = function (res, data) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
};

module.exports = {
    getQuery: getQuery,
    writeJsonp: writeJsonp,
    writeJson: writeJson
};