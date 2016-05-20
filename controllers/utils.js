var url = require('url');

var utils = {
    /**
     * Get array of query parameters from the request
     */
    getQuery: function (req) {
        var url_parts = url.parse(req.url, true);
        return url_parts.query;
    },

    /**
     * Write output as jsonp (for app)
     */
    writeJsonp: function (res, callback, data) {
        res.writeHead(200, {'Content-Type': 'application/javascript'});
        res.end(callback + "(" + JSON.stringify(data) + ")");
    }
}

module.exports = utils;