var port = require('port');

var khl4a = new port({
    'host': '192.168.1.146',
    'write': 13001
}).on('connect', function(){
    this.write('Hello khl4a;\n');
});
khl4a.connect();

var khl4b = new port({
    'host': '192.168.1.140',
    'write': 13000
}).on('connect', function(){
    this.write('Hello khl4b;\n');
});
khl4b.connect();

var play = function(notes,velocities) {

    if (notes.length == velocities.length)
    {
        var n1 = { 64:0, 67:0, 62:0, 69:0, 66:0, 71:0 };
        var n2 = { 63:0, 60:0, 65:0, 70:0, 61:0, 68:0 };

        var l = notes.length;
        for (var n=0; n<l; n++ )
        {
            if (notes[n] in n1) {  n1[notes[n]] = velocities[n]/127; }
            if (notes[n] in n2) {  n2[notes[n]] = velocities[n]/127; }
        }
        //console.log(n1);
        //console.log(n2);
    }

    for (var note in n1) {
        khl4a.write(note + " " + n1[note] + ";\n");
    }
    for (var note in n2) {
        khl4b.write(note + " " + n2[note] + ";\n");
    }

}

module.exports = { play:play }