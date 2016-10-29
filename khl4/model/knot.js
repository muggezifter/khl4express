var mongoose = require( 'mongoose' );

var knotSchema = new mongoose.Schema({
    rec_id: String,
    date: Date,
    lat: String,
    lon: String,
    chord: [{ note: Number, velocity: Number}]
});

var Knot = module.exports = mongoose.model('Knot', knotSchema);