var geographicLib = require('geographiclib');
var geod = geographicLib.Geodesic.WGS84;
var mongoose = require( 'mongoose' );
var Grid = mongoose.model('Grid');

/**
 * Compute the distances of the given lat/lon to the points defined in the points array.
 * Order by distance, take the 3 closest ones, convert distance to midi velocity.
 *
 * @link http://geographiclib.sourceforge.net/html/js/
 *
 * @param lat
 * @param lon
 * @param grid_id
 * @param time
 * @param debug
 * @returns {Array}
 */
var compute = function (lat, lon, grid_id, time, debug, callback) {
    Grid.findOne({'grid_id': grid_id}, function (err, grid) {
        if (err) {
            console.log(err);
        }
        var result = grid.points
            // calculate distances
            .map(
            function (point) {
                point.timestamp = time;
                point.ilat = +lat; // latitiude from input
                point.ilon = +lon; // longitude from input
                point.distance = geod.Inverse(point.lat, point.lon, lat, lon).s12; // distance input to point
                return point;
            })
            // order by distance
            .sort(function (a, b) {
                return a.distance - b.distance
            })
            // calcutate midi velocity for nearest three
            .map(function (point, key) {
                point.velocity = (key > 2 || point.distance > grid.size)
                    ? 0
                    // distance to midi velocity http://www.analyzemath.com/parabola/three_points_para_calc.html
                    : Math.floor(-(13 / 675000) * point.distance * point.distance) - ((59 / 4500) * point.distance ) + 127;
                return point;
            });

        callback(
            (debug) ? result : result.slice(0, 3) // send only necessary data to app
            .map(function (point, key) {
                return {note: point.note, distance: point.distance, velocity: point.velocity};
            })
            .sort(function (a, b) {
                return a.note - b.note;
            })
        );
    });
}

module.exports = {
    compute: compute
};