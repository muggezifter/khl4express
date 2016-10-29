var mongoose = require( 'mongoose' );

var gridSchema = new mongoose.Schema({
    name: String,
    grid_id: String,
    size: Number,
    points: [{ note: Number, lat: Number, lon: Number}]
});

var Grid = module.exports = mongoose.model('Grid', gridSchema);