var mongoose = require( 'mongoose' );

var recordingSchema = new mongoose.Schema({
    recording_id: String,
    grid_id: String,
    description: String,
    starttime:String,
    endtime: String
});

var Recording = module.exports = mongoose.model('Recording', recordingSchema);