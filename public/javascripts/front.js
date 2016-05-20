"use strict";

(function () {
    var now_playing = null;

    var recordings = [];
    var interval = 10;
    var now_playing;
    var playing_interval;
    var speedfactor = 1000;
    var vol= 0.6;

    var play = function (now_playing) {
        console.log(speedfactor);
        $.getJSON("http://localhost:8080/play?callback=?").done(function (data) {
            console.log(data);
        });
        khl4map.initializeMaps();
        setTimeout(function () {
            if (playing_interval) {
                clearInterval(playing_interval);
            }
            // console.log(now_playing);
            var index = 0;
            if (now_playing.length > 2) {
                interval = (now_playing[now_playing.length - 1].timestamp - now_playing[0].timestamp) / now_playing.length;
                playNode(now_playing[0])
                playing_interval = setInterval(function () {
                    if (now_playing[++index]) {
                        playNode(now_playing[index]);
                        // console.log(index);
                    } else {
                        clearInterval(playing_interval);
                        // console.log("end");;
                        $.getJSON("http://localhost:8080/play?callback=?").done(function (data) {
                            console.log(data);
                        });
                    }

                }, speedfactor * interval);
            }
        }, 1000);
    }

    var display = function (node) {
        $("#display").text(
            convert(node.timestamp) + " lon:" + parseFloat(node.lon).toPrecision(8) + " lat:" + parseFloat(node.lat).toPrecision(9)
        );
    }

    var playNode = function (node) {
        display(node);
        khl4map.addBike(node.lat, node.lon);
        var q = "";
        for (var n in node.chord) {
            q += "n=" + node.chord[n].note + "&v=" + vol*(node.chord[n].velocity) + "&";
            $.getJSON("http://localhost:8080/play?" + q + "&callback=?").done(function (data) {
                console.log(data);
            });

        }


    }

    var convert = function (timestamp) {
        var a = new Date(timestamp * 1000);
        var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = (a.getHours() + "0").substr(0, 2);
        var min = (a.getMinutes() + "0").substr(0, 2);
        var sec = (a.getSeconds() + "0").substr(0, 2);
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    }

    var changePlay = function (id) {
        switch (id) {
            case "pause":
                $.getJSON("http://localhost:8080/play?callback=?").done(function (data) {
                    console.log(data);
                });
                if (playing_interval) {
                    clearInterval(playing_interval);
                }
                console.log("p");
                break;
            case "live":
                $.getJSON("http://localhost:8080/play?callback=?").done(function (data) {
                    console.log(data);
                });
                if (playing_interval) {
                    clearInterval(playing_interval);
                }
                console.log("l");
                break;
            default:
                $.getJSON("http://localhost:8080/recording/find?rec_id=" + id + "&callback=?").done(function (data) {
                    now_playing = data[0].nodes;
                    play(now_playing);
                });
                break;
        }

    };
    var getList = function () {
        $.getJSON("http://localhost:8080/recording/list?callback=?").done(function (data) {
            recordings = data;
            var i = recordings.length;
            while (recordings[--i]) {
                $("select#play_select")
                    .append($('<option>', { value: recordings[i].recording_id })
                        .text((recordings[i].description)
                            ? (recordings[i].description)
                            : recordings[i].recording_id));

            }
        });
    };

    $("#acc input:checkbox").change(
        function (event) {
            speedfactor = (speedfactor==200)?1000:200;
        });

    $("select#play_select").change(
        function (event) {
            changePlay(event.target.value)
        });



    getList();

})();

