var khl4map = {
    map: null,
    bike: null,
    markers: [
        ['E', 51.92837, 4.41509],
        ['G', 51.92837, 4.44777],
        ['A&#9839; / B&#9837;', 51.92837, 4.48046],
        ['C&#9839; / D&#9837;', 51.92837, 4.51314],

        ['B', 51.91086, 4.43145],
        ['D', 51.91086, 4.46413],
        ['F', 51.91086, 4.49682],
        ['G&#9839; / A&#9837;', 51.91086, 4.52950],

        ['F&#9839; / G&#9837;', 51.89335, 4.44780],
        ['A', 51.89335, 4.48048],
        ['C', 51.89335, 4.51317],
        ['D&#9839; / E&#9837', 51.89335, 4.54585]
    ],

    p01: {lat: 51.92837, lng: 4.41509},
    p02: {lat: 51.92837, lng: 4.44777},
    p03: {lat: 51.92837, lng: 4.48046},
    p04: {lat: 51.92837, lng: 4.51314},

    p05: {lat: 51.91086, lng: 4.43145},
    p06: {lat: 51.91086, lng: 4.46413},
    p07: {lat: 51.91086, lng: 4.49682},
    p08: {lat: 51.91086, lng: 4.52950},

    p09: {lat: 51.89335, lng: 4.44780},
    p10: {lat: 51.89335, lng: 4.48048},
    p11: {lat: 51.89335, lng: 4.51317},
    p12: {lat: 51.89335, lng: 4.54585},


    initializeMaps: function () {
        var myOptions = {
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            //mapTypeId: google.maps.MapTypeId.SATTELITE,
            //mapTypeId: google.maps.MapTypeId.HYBRID,
            mapTypeControl: true
        };
        this.map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

        var infowindow = new google.maps.InfoWindow();
        var marker, i;
        var bounds = new google.maps.LatLngBounds();

        var gridPath = [this.p09, this.p12, this.p08, this.p11,
            this.p07, this.p10, this.p06, this.p09, this.p05,
            this.p08, this.p04, this.p07, this.p03, this.p06,
            this.p02, this.p05, this.p01, this.p04];


        var labels = ["E","G","A#","C#","B","D","F","G#","F#","A","C","D#"];
        var labelIndex = 0;

        for (i = 0; i < this.markers.length; i++) {
            var pos = new google.maps.LatLng(
                this.markers[i][1],
                this.markers[i][2]
            );

            bounds.extend(pos);

            marker = new google.maps.Marker({
                position: pos,
                map: this.map,
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 6,
                    strokeColor: '#999',
                    strokeOpacity: 1 ,
                    fillColor: '#fff',
                    fillOpacity: 1,
                    strokeWeight: 3,
                },

            });

            google.maps.event.addListener(marker, 'click', (
                function (marker, i) {
                    return function () {
                        infowindow.setContent(this.markers[i][0]);
                        infowindow.open(this.map, marker);
                    }.bind(this)
                }.bind(this))(marker, i));

            var grid = new google.maps.Polyline({
                path: gridPath,
                geodesic: false,
                strokeColor: '#999',
                strokeOpacity: 1,
                strokeWeight: 3
            });

            grid.setMap(this.map);

            this.map.fitBounds(bounds);
        }
    },
    addBike : function (lat, lon){
        var oldBike = (this.bike) ? this.bike : null;

        var pos = new google.maps.LatLng(lat, lon);
        this.bike = new google.maps.Marker({
            position: pos,
            map: this.map,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 8,
                fillColor: '#F00',
                fillOpacity: 1,
                strokeWeight: 0
            }
        });
        if (oldBike)
        {
            oldBike.setIcon({
                path: google.maps.SymbolPath.CIRCLE,
                scale: 5,
                fillColor: '#EE9A4D',
                fillOpacity: 0.3,
                strokeWeight: 0
            });
        }
        //this.markers[this_bike.__gm_id] = this.bike;
    },
    removeBike: function() {
        this.bike.setMap(null);
    }
};

khl4map.initializeMaps();

