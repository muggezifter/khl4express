var express = require('express');
var router = express.Router();
var test = require('../controllers/test');

var utils = require('../controllers/utils');
var mongoose = require( 'mongoose' );
var Recording = mongoose.model('Recording');
var Knot = mongoose.model('Knot');

/**
 * Test if server is available
 */
router.get("/server",(req, res) => test.server(req, res));

/**
 * Test if db is available
 */
router.get("/db",(req, res) => test.db(req, res));

var obj = {
	"description" : "tram 8-25-25-24-21",
	"endtime" : null,
	"grid_id" : "G0001",
	"nodes" : [
		{
			"timestamp" : 1454856341,
			"lat" : "51.9186619",
			"lon" : "4.433446",
			"chord" : [
				{
					"note" : 64,
					"velocity" : 14
				},
				{
					"note" : 67,
					"velocity" : 20
				},
				{
					"note" : 71,
					"velocity" : 43
				}
			]
		},
		{
			"timestamp" : 1454856348,
			"lat" : "51.9185343",
			"lon" : "4.4334713",
			"chord" : [
				{
					"note" : 64,
					"velocity" : 14
				},
				{
					"note" : 67,
					"velocity" : 20
				},
				{
					"note" : 71,
					"velocity" : 44
				}
			]
		},
		{
			"timestamp" : 1454856359,
			"lat" : "51.9179369",
			"lon" : "4.4338257",
			"chord" : [
				{
					"note" : 64,
					"velocity" : 12
				},
				{
					"note" : 67,
					"velocity" : 19
				},
				{
					"note" : 71,
					"velocity" : 47
				}
			]
		},
		{
			"timestamp" : 1454856370,
			"lat" : "51.9179369",
			"lon" : "4.4338257",
			"chord" : [
				{
					"note" : 64,
					"velocity" : 12
				},
				{
					"note" : 67,
					"velocity" : 19
				},
				{
					"note" : 71,
					"velocity" : 47
				}
			]
		},
		{
			"timestamp" : 1454856380,
			"lat" : "51.9179455",
			"lon" : "4.4339309",
			"chord" : [
				{
					"note" : 64,
					"velocity" : 12
				},
				{
					"note" : 67,
					"velocity" : 19
				},
				{
					"note" : 71,
					"velocity" : 47
				}
			]
		},
		{
			"timestamp" : 1454856391,
			"lat" : "51.9180223",
			"lon" : "4.4346869",
			"chord" : [
				{
					"note" : 64,
					"velocity" : 11
				},
				{
					"note" : 67,
					"velocity" : 20
				},
				{
					"note" : 71,
					"velocity" : 46
				}
			]
		},
		{
			"timestamp" : 1454856401,
			"lat" : "51.9175284",
			"lon" : "4.4353909",
			"chord" : [
				{
					"note" : 64,
					"velocity" : 9
				},
				{
					"note" : 67,
					"velocity" : 20
				},
				{
					"note" : 71,
					"velocity" : 48
				}
			]
		},
		{
			"timestamp" : 1454856412,
			"lat" : "51.9169201",
			"lon" : "4.435916",
			"chord" : [
				{
					"note" : 64,
					"velocity" : 7
				},
				{
					"note" : 67,
					"velocity" : 19
				},
				{
					"note" : 71,
					"velocity" : 51
				}
			]
		},
		{
			"timestamp" : 1454856423,
			"lat" : "51.9169201",
			"lon" : "4.435916",
			"chord" : [
				{
					"note" : 64,
					"velocity" : 7
				},
				{
					"note" : 67,
					"velocity" : 19
				},
				{
					"note" : 71,
					"velocity" : 51
				}
			]
		},
		{
			"timestamp" : 1454856433,
			"lat" : "51.9161679",
			"lon" : "4.436405",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 5
				},
				{
					"note" : 67,
					"velocity" : 17
				},
				{
					"note" : 71,
					"velocity" : 54
				}
			]
		},
		{
			"timestamp" : 1454856443,
			"lat" : "51.9161679",
			"lon" : "4.436405",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 5
				},
				{
					"note" : 67,
					"velocity" : 17
				},
				{
					"note" : 71,
					"velocity" : 54
				}
			]
		},
		{
			"timestamp" : 1454856455,
			"lat" : "51.9158106",
			"lon" : "4.435344",
			"chord" : [
				{
					"note" : 64,
					"velocity" : 6
				},
				{
					"note" : 67,
					"velocity" : 15
				},
				{
					"note" : 71,
					"velocity" : 58
				}
			]
		},
		{
			"timestamp" : 1454856466,
			"lat" : "51.9157892",
			"lon" : "4.4353146",
			"chord" : [
				{
					"note" : 64,
					"velocity" : 6
				},
				{
					"note" : 67,
					"velocity" : 15
				},
				{
					"note" : 71,
					"velocity" : 58
				}
			]
		},
		{
			"timestamp" : 1454856476,
			"lat" : "51.915461",
			"lon" : "4.4353829",
			"chord" : [
				{
					"note" : 64,
					"velocity" : 5
				},
				{
					"note" : 67,
					"velocity" : 14
				},
				{
					"note" : 71,
					"velocity" : 60
				}
			]
		},
		{
			"timestamp" : 1454856486,
			"lat" : "51.915461",
			"lon" : "4.4353829",
			"chord" : [
				{
					"note" : 64,
					"velocity" : 5
				},
				{
					"note" : 67,
					"velocity" : 14
				},
				{
					"note" : 71,
					"velocity" : 60
				}
			]
		},
		{
			"timestamp" : 1454856496,
			"lat" : "51.9142633",
			"lon" : "4.433795",
			"chord" : [
				{
					"note" : 64,
					"velocity" : 5
				},
				{
					"note" : 67,
					"velocity" : 9
				},
				{
					"note" : 71,
					"velocity" : 73
				}
			]
		},
		{
			"timestamp" : 1454856506,
			"lat" : "51.9142633",
			"lon" : "4.433795",
			"chord" : [
				{
					"note" : 64,
					"velocity" : 5
				},
				{
					"note" : 67,
					"velocity" : 9
				},
				{
					"note" : 71,
					"velocity" : 73
				}
			]
		},
		{
			"timestamp" : 1454856518,
			"lat" : "51.9139147",
			"lon" : "4.4324639",
			"chord" : [
				{
					"note" : 64,
					"velocity" : 5
				},
				{
					"note" : 67,
					"velocity" : 7
				},
				{
					"note" : 71,
					"velocity" : 78
				}
			]
		},
		{
			"timestamp" : 1454856528,
			"lat" : "51.9132852",
			"lon" : "4.432287",
			"chord" : [
				{
					"note" : 64,
					"velocity" : 4
				},
				{
					"note" : 67,
					"velocity" : 6
				},
				{
					"note" : 71,
					"velocity" : 85
				}
			]
		},
		{
			"timestamp" : 1454856538,
			"lat" : "51.9134406",
			"lon" : "4.4324492",
			"chord" : [
				{
					"note" : 64,
					"velocity" : 4
				},
				{
					"note" : 67,
					"velocity" : 6
				},
				{
					"note" : 71,
					"velocity" : 83
				}
			]
		},
		{
			"timestamp" : 1454856549,
			"lat" : "51.9134406",
			"lon" : "4.4324492",
			"chord" : [
				{
					"note" : 64,
					"velocity" : 4
				},
				{
					"note" : 67,
					"velocity" : 6
				},
				{
					"note" : 71,
					"velocity" : 83
				}
			]
		},
		{
			"timestamp" : 1454856560,
			"lat" : "51.9133036",
			"lon" : "4.4317308",
			"chord" : [
				{
					"note" : 64,
					"velocity" : 5
				},
				{
					"note" : 67,
					"velocity" : 5
				},
				{
					"note" : 71,
					"velocity" : 86
				}
			]
		},
		{
			"timestamp" : 1454856570,
			"lat" : "51.9134269",
			"lon" : "4.4317535",
			"chord" : [
				{
					"note" : 64,
					"velocity" : 5
				},
				{
					"note" : 67,
					"velocity" : 5
				},
				{
					"note" : 71,
					"velocity" : 84
				}
			]
		},
		{
			"timestamp" : 1454856581,
			"lat" : "51.9130947",
			"lon" : "4.4324494",
			"chord" : [
				{
					"note" : 64,
					"velocity" : 3
				},
				{
					"note" : 67,
					"velocity" : 5
				},
				{
					"note" : 71,
					"velocity" : 87
				}
			]
		},
		{
			"timestamp" : 1454856591,
			"lat" : "51.9132607",
			"lon" : "4.4337091",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 3
				},
				{
					"note" : 67,
					"velocity" : 7
				},
				{
					"note" : 71,
					"velocity" : 82
				}
			]
		},
		{
			"timestamp" : 1454856602,
			"lat" : "51.9126615",
			"lon" : "4.434346",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 4
				},
				{
					"note" : 67,
					"velocity" : 6
				},
				{
					"note" : 71,
					"velocity" : 85
				}
			]
		},
		{
			"timestamp" : 1454856612,
			"lat" : "51.9126615",
			"lon" : "4.434346",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 4
				},
				{
					"note" : 67,
					"velocity" : 6
				},
				{
					"note" : 71,
					"velocity" : 85
				}
			]
		},
		{
			"timestamp" : 1454856623,
			"lat" : "51.912406",
			"lon" : "4.4352019",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 5
				},
				{
					"note" : 67,
					"velocity" : 6
				},
				{
					"note" : 71,
					"velocity" : 82
				}
			]
		},
		{
			"timestamp" : 1454856633,
			"lat" : "51.9118544",
			"lon" : "4.4376208",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 10
				},
				{
					"note" : 67,
					"velocity" : 6
				},
				{
					"note" : 71,
					"velocity" : 71
				}
			]
		},
		{
			"timestamp" : 1454856645,
			"lat" : "51.91151",
			"lon" : "4.4387938",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 12
				},
				{
					"note" : 67,
					"velocity" : 6
				},
				{
					"note" : 71,
					"velocity" : 65
				}
			]
		},
		{
			"timestamp" : 1454856655,
			"lat" : "51.9112103",
			"lon" : "4.4397597",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 14
				},
				{
					"note" : 67,
					"velocity" : 6
				},
				{
					"note" : 71,
					"velocity" : 61
				}
			]
		},
		{
			"timestamp" : 1454856666,
			"lat" : "51.910923",
			"lon" : "4.4407115",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 16
				},
				{
					"note" : 67,
					"velocity" : 5
				},
				{
					"note" : 71,
					"velocity" : 57
				}
			]
		},
		{
			"timestamp" : 1454856675,
			"lat" : "51.910923",
			"lon" : "4.4407115",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 16
				},
				{
					"note" : 67,
					"velocity" : 5
				},
				{
					"note" : 71,
					"velocity" : 57
				}
			]
		},
		{
			"timestamp" : 1454856686,
			"lat" : "51.9103524",
			"lon" : "4.4419664",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 18
				},
				{
					"note" : 66,
					"velocity" : 7
				},
				{
					"note" : 71,
					"velocity" : 51
				}
			]
		},
		{
			"timestamp" : 1454856697,
			"lat" : "51.9103484",
			"lon" : "4.4420792",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 19
				},
				{
					"note" : 66,
					"velocity" : 7
				},
				{
					"note" : 71,
					"velocity" : 51
				}
			]
		},
		{
			"timestamp" : 1454856707,
			"lat" : "51.9105017",
			"lon" : "4.4429013",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 20
				},
				{
					"note" : 66,
					"velocity" : 7
				},
				{
					"note" : 71,
					"velocity" : 48
				}
			]
		},
		{
			"timestamp" : 1454856718,
			"lat" : "51.9103923",
			"lon" : "4.4442532",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 23
				},
				{
					"note" : 66,
					"velocity" : 8
				},
				{
					"note" : 71,
					"velocity" : 43
				}
			]
		},
		{
			"timestamp" : 1454856727,
			"lat" : "51.9103923",
			"lon" : "4.4442532",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 23
				},
				{
					"note" : 66,
					"velocity" : 8
				},
				{
					"note" : 71,
					"velocity" : 43
				}
			]
		},
		{
			"timestamp" : 1454856738,
			"lat" : "51.9099799",
			"lon" : "4.4449193",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 25
				},
				{
					"note" : 66,
					"velocity" : 9
				},
				{
					"note" : 71,
					"velocity" : 41
				}
			]
		},
		{
			"timestamp" : 1454856750,
			"lat" : "51.9098926",
			"lon" : "4.4451991",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 26
				},
				{
					"note" : 66,
					"velocity" : 9
				},
				{
					"note" : 71,
					"velocity" : 40
				}
			]
		},
		{
			"timestamp" : 1454856760,
			"lat" : "51.9098926",
			"lon" : "4.4451991",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 26
				},
				{
					"note" : 66,
					"velocity" : 9
				},
				{
					"note" : 71,
					"velocity" : 40
				}
			]
		},
		{
			"timestamp" : 1454856770,
			"lat" : "51.9099916",
			"lon" : "4.4458159",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 27
				},
				{
					"note" : 66,
					"velocity" : 9
				},
				{
					"note" : 71,
					"velocity" : 38
				}
			]
		},
		{
			"timestamp" : 1454856781,
			"lat" : "51.9095021",
			"lon" : "4.4459431",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 27
				},
				{
					"note" : 66,
					"velocity" : 10
				},
				{
					"note" : 71,
					"velocity" : 37
				}
			]
		},
		{
			"timestamp" : 1454856791,
			"lat" : "51.9087222",
			"lon" : "4.4459033",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 27
				},
				{
					"note" : 66,
					"velocity" : 13
				},
				{
					"note" : 71,
					"velocity" : 37
				}
			]
		},
		{
			"timestamp" : 1454856802,
			"lat" : "51.9078241",
			"lon" : "4.4457967",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 26
				},
				{
					"note" : 66,
					"velocity" : 16
				},
				{
					"note" : 71,
					"velocity" : 36
				}
			]
		},
		{
			"timestamp" : 1454856812,
			"lat" : "51.907283",
			"lon" : "4.445708",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 25
				},
				{
					"note" : 66,
					"velocity" : 17
				},
				{
					"note" : 71,
					"velocity" : 35
				}
			]
		},
		{
			"timestamp" : 1454856823,
			"lat" : "51.907283",
			"lon" : "4.445708",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 25
				},
				{
					"note" : 66,
					"velocity" : 17
				},
				{
					"note" : 71,
					"velocity" : 35
				}
			]
		},
		{
			"timestamp" : 1454856833,
			"lat" : "51.9074285",
			"lon" : "4.4456538",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 25
				},
				{
					"note" : 66,
					"velocity" : 17
				},
				{
					"note" : 71,
					"velocity" : 36
				}
			]
		},
		{
			"timestamp" : 1454856844,
			"lat" : "51.9067792",
			"lon" : "4.4456807",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 24
				},
				{
					"note" : 66,
					"velocity" : 19
				},
				{
					"note" : 71,
					"velocity" : 34
				}
			]
		},
		{
			"timestamp" : 1454856854,
			"lat" : "51.906108",
			"lon" : "4.4455164",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 23
				},
				{
					"note" : 66,
					"velocity" : 21
				},
				{
					"note" : 71,
					"velocity" : 33
				}
			]
		},
		{
			"timestamp" : 1454856865,
			"lat" : "51.9054979",
			"lon" : "4.4451672",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 21
				},
				{
					"note" : 66,
					"velocity" : 24
				},
				{
					"note" : 71,
					"velocity" : 33
				}
			]
		},
		{
			"timestamp" : 1454856876,
			"lat" : "51.9054979",
			"lon" : "4.4451672",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 21
				},
				{
					"note" : 66,
					"velocity" : 24
				},
				{
					"note" : 71,
					"velocity" : 33
				}
			]
		},
		{
			"timestamp" : 1454856886,
			"lat" : "51.9049439",
			"lon" : "4.445296",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 21
				},
				{
					"note" : 66,
					"velocity" : 26
				},
				{
					"note" : 71,
					"velocity" : 31
				}
			]
		},
		{
			"timestamp" : 1454856898,
			"lat" : "51.9044147",
			"lon" : "4.4465643",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 22
				},
				{
					"note" : 66,
					"velocity" : 28
				},
				{
					"note" : 71,
					"velocity" : 27
				}
			]
		},
		{
			"timestamp" : 1454856908,
			"lat" : "51.9043452",
			"lon" : "4.4467063",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 22
				},
				{
					"note" : 66,
					"velocity" : 29
				},
				{
					"note" : 71,
					"velocity" : 27
				}
			]
		},
		{
			"timestamp" : 1454856917,
			"lat" : "51.9043452",
			"lon" : "4.4467063",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 22
				},
				{
					"note" : 66,
					"velocity" : 29
				},
				{
					"note" : 71,
					"velocity" : 27
				}
			]
		},
		{
			"timestamp" : 1454856928,
			"lat" : "51.9043452",
			"lon" : "4.4467063",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 22
				},
				{
					"note" : 66,
					"velocity" : 29
				},
				{
					"note" : 71,
					"velocity" : 27
				}
			]
		},
		{
			"timestamp" : 1454856940,
			"lat" : "51.9039059",
			"lon" : "4.4476549",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 23
				},
				{
					"note" : 66,
					"velocity" : 31
				},
				{
					"note" : 71,
					"velocity" : 24
				}
			]
		},
		{
			"timestamp" : 1454856949,
			"lat" : "51.9036179",
			"lon" : "4.4494153",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 26
				},
				{
					"note" : 66,
					"velocity" : 32
				},
				{
					"note" : 71,
					"velocity" : 20
				}
			]
		},
		{
			"timestamp" : 1454856959,
			"lat" : "51.9034239",
			"lon" : "4.4506383",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 28
				},
				{
					"note" : 66,
					"velocity" : 32
				},
				{
					"note" : 71,
					"velocity" : 17
				}
			]
		},
		{
			"timestamp" : 1454856970,
			"lat" : "51.9034014",
			"lon" : "4.4519524",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 30
				},
				{
					"note" : 66,
					"velocity" : 31
				},
				{
					"note" : 71,
					"velocity" : 15
				}
			]
		},
		{
			"timestamp" : 1454856980,
			"lat" : "51.9034014",
			"lon" : "4.4519524",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 30
				},
				{
					"note" : 66,
					"velocity" : 31
				},
				{
					"note" : 71,
					"velocity" : 15
				}
			]
		},
		{
			"timestamp" : 1454856992,
			"lat" : "51.9035754",
			"lon" : "4.4529955",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 33
				},
				{
					"note" : 66,
					"velocity" : 30
				},
				{
					"note" : 71,
					"velocity" : 13
				}
			]
		},
		{
			"timestamp" : 1454857005,
			"lat" : "51.90367",
			"lon" : "4.4534525",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 34
				},
				{
					"note" : 66,
					"velocity" : 29
				},
				{
					"note" : 71,
					"velocity" : 13
				}
			]
		},
		{
			"timestamp" : 1454857012,
			"lat" : "51.9037039",
			"lon" : "4.4535177",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 34
				},
				{
					"note" : 66,
					"velocity" : 29
				},
				{
					"note" : 71,
					"velocity" : 13
				}
			]
		},
		{
			"timestamp" : 1454857023,
			"lat" : "51.9039487",
			"lon" : "4.4549822",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 38
				},
				{
					"note" : 66,
					"velocity" : 27
				},
				{
					"note" : 71,
					"velocity" : 11
				}
			]
		},
		{
			"timestamp" : 1454857033,
			"lat" : "51.9039487",
			"lon" : "4.4549822",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 38
				},
				{
					"note" : 66,
					"velocity" : 27
				},
				{
					"note" : 71,
					"velocity" : 11
				}
			]
		},
		{
			"timestamp" : 1454857044,
			"lat" : "51.9042165",
			"lon" : "4.4565406",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 42
				},
				{
					"note" : 66,
					"velocity" : 24
				},
				{
					"note" : 71,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454857055,
			"lat" : "51.90509",
			"lon" : "4.4593307",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 52
				},
				{
					"note" : 66,
					"velocity" : 18
				},
				{
					"note" : 69,
					"velocity" : 6
				}
			]
		},
		{
			"timestamp" : 1454857065,
			"lat" : "51.9052072",
			"lon" : "4.4596719",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 53
				},
				{
					"note" : 66,
					"velocity" : 18
				},
				{
					"note" : 69,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454857075,
			"lat" : "51.9052072",
			"lon" : "4.4596719",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 53
				},
				{
					"note" : 66,
					"velocity" : 18
				},
				{
					"note" : 69,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454857086,
			"lat" : "51.9052072",
			"lon" : "4.4596719",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 53
				},
				{
					"note" : 66,
					"velocity" : 18
				},
				{
					"note" : 69,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454857097,
			"lat" : "51.9054332",
			"lon" : "4.4597872",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 54
				},
				{
					"note" : 66,
					"velocity" : 17
				},
				{
					"note" : 69,
					"velocity" : 6
				}
			]
		},
		{
			"timestamp" : 1454857107,
			"lat" : "51.905284",
			"lon" : "4.4599343",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 54
				},
				{
					"note" : 66,
					"velocity" : 17
				},
				{
					"note" : 69,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454857118,
			"lat" : "51.9056851",
			"lon" : "4.4609775",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 58
				},
				{
					"note" : 66,
					"velocity" : 15
				},
				{
					"note" : 69,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454857128,
			"lat" : "51.9061758",
			"lon" : "4.4622292",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 63
				},
				{
					"note" : 66,
					"velocity" : 12
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454857138,
			"lat" : "51.9064164",
			"lon" : "4.4627349",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 66
				},
				{
					"note" : 66,
					"velocity" : 11
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454857149,
			"lat" : "51.9064164",
			"lon" : "4.4627349",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 66
				},
				{
					"note" : 66,
					"velocity" : 11
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454857163,
			"lat" : "51.9065905",
			"lon" : "4.4621743",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 66
				},
				{
					"note" : 66,
					"velocity" : 11
				},
				{
					"note" : 69,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454857171,
			"lat" : "51.9066212",
			"lon" : "4.462498",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 67
				},
				{
					"note" : 66,
					"velocity" : 11
				},
				{
					"note" : 69,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454857181,
			"lat" : "51.9066212",
			"lon" : "4.462498",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 67
				},
				{
					"note" : 66,
					"velocity" : 11
				},
				{
					"note" : 69,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454857191,
			"lat" : "51.9066212",
			"lon" : "4.462498",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 67
				},
				{
					"note" : 66,
					"velocity" : 11
				},
				{
					"note" : 69,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454857205,
			"lat" : "51.906484",
			"lon" : "4.4630617",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 66
				},
				{
					"note" : 66,
					"velocity" : 10
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454857212,
			"lat" : "51.906484",
			"lon" : "4.4630617",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 66
				},
				{
					"note" : 66,
					"velocity" : 10
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454857225,
			"lat" : "51.9066801",
			"lon" : "4.462873",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 68
				},
				{
					"note" : 66,
					"velocity" : 10
				},
				{
					"note" : 69,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454857234,
			"lat" : "51.9066798",
			"lon" : "4.4629045",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 68
				},
				{
					"note" : 66,
					"velocity" : 10
				},
				{
					"note" : 69,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454857244,
			"lat" : "51.9064727",
			"lon" : "4.4632186",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 66
				},
				{
					"note" : 66,
					"velocity" : 10
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454857254,
			"lat" : "51.9066763",
			"lon" : "4.4637528",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 68
				},
				{
					"note" : 66,
					"velocity" : 9
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454857264,
			"lat" : "51.9066763",
			"lon" : "4.4637528",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 68
				},
				{
					"note" : 66,
					"velocity" : 9
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454857275,
			"lat" : "51.9072876",
			"lon" : "4.4649465",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 74
				},
				{
					"note" : 66,
					"velocity" : 7
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454857286,
			"lat" : "51.9076306",
			"lon" : "4.4653409",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 77
				},
				{
					"note" : 66,
					"velocity" : 5
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454857296,
			"lat" : "51.9077503",
			"lon" : "4.4660452",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 76
				},
				{
					"note" : 66,
					"velocity" : 4
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454857308,
			"lat" : "51.90759",
			"lon" : "4.4662827",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 74
				},
				{
					"note" : 66,
					"velocity" : 5
				},
				{
					"note" : 69,
					"velocity" : 9
				}
			]
		},
		{
			"timestamp" : 1454857318,
			"lat" : "51.907607",
			"lon" : "4.4662881",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 75
				},
				{
					"note" : 66,
					"velocity" : 4
				},
				{
					"note" : 69,
					"velocity" : 9
				}
			]
		},
		{
			"timestamp" : 1454857328,
			"lat" : "51.907607",
			"lon" : "4.4662881",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 75
				},
				{
					"note" : 66,
					"velocity" : 4
				},
				{
					"note" : 69,
					"velocity" : 9
				}
			]
		},
		{
			"timestamp" : 1454857342,
			"lat" : "51.9078772",
			"lon" : "4.4665739",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 76
				},
				{
					"note" : 66,
					"velocity" : 4
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454857349,
			"lat" : "51.9081708",
			"lon" : "4.4670285",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 77
				},
				{
					"note" : 65,
					"velocity" : 4
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454857360,
			"lat" : "51.9082871",
			"lon" : "4.4671204",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 78
				},
				{
					"note" : 65,
					"velocity" : 4
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454857370,
			"lat" : "51.9082871",
			"lon" : "4.4671204",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 78
				},
				{
					"note" : 65,
					"velocity" : 4
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454857384,
			"lat" : "51.9084447",
			"lon" : "4.4674028",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 78
				},
				{
					"note" : 65,
					"velocity" : 4
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454857391,
			"lat" : "51.9087301",
			"lon" : "4.4682968",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 76
				},
				{
					"note" : 65,
					"velocity" : 6
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454857403,
			"lat" : "51.9090863",
			"lon" : "4.4699755",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 70
				},
				{
					"note" : 65,
					"velocity" : 9
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454857412,
			"lat" : "51.9095447",
			"lon" : "4.4709507",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 67
				},
				{
					"note" : 65,
					"velocity" : 11
				},
				{
					"note" : 69,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454857423,
			"lat" : "51.9095447",
			"lon" : "4.4709507",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 67
				},
				{
					"note" : 65,
					"velocity" : 11
				},
				{
					"note" : 69,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454857433,
			"lat" : "51.9094689",
			"lon" : "4.4716646",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 63
				},
				{
					"note" : 65,
					"velocity" : 12
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454857444,
			"lat" : "51.9094689",
			"lon" : "4.4716646",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 63
				},
				{
					"note" : 65,
					"velocity" : 12
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454857454,
			"lat" : "51.9094689",
			"lon" : "4.4716646",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 63
				},
				{
					"note" : 65,
					"velocity" : 12
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454857466,
			"lat" : "51.9100982",
			"lon" : "4.4728605",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 59
				},
				{
					"note" : 65,
					"velocity" : 15
				},
				{
					"note" : 69,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454857476,
			"lat" : "51.9111248",
			"lon" : "4.4762921",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 45
				},
				{
					"note" : 65,
					"velocity" : 22
				},
				{
					"note" : 70,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454857486,
			"lat" : "51.9111248",
			"lon" : "4.4762921",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 45
				},
				{
					"note" : 65,
					"velocity" : 22
				},
				{
					"note" : 70,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454857497,
			"lat" : "51.9112432",
			"lon" : "4.4767844",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 44
				},
				{
					"note" : 65,
					"velocity" : 23
				},
				{
					"note" : 70,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454857508,
			"lat" : "51.9112373",
			"lon" : "4.4767937",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 44
				},
				{
					"note" : 65,
					"velocity" : 23
				},
				{
					"note" : 70,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454857518,
			"lat" : "51.9115308",
			"lon" : "4.477323",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 42
				},
				{
					"note" : 65,
					"velocity" : 24
				},
				{
					"note" : 70,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454857529,
			"lat" : "51.9114681",
			"lon" : "4.4782249",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 39
				},
				{
					"note" : 65,
					"velocity" : 27
				},
				{
					"note" : 70,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454857539,
			"lat" : "51.9114681",
			"lon" : "4.4782249",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 39
				},
				{
					"note" : 65,
					"velocity" : 27
				},
				{
					"note" : 70,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454857549,
			"lat" : "51.9113273",
			"lon" : "4.4784537",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 38
				},
				{
					"note" : 65,
					"velocity" : 27
				},
				{
					"note" : 70,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454857561,
			"lat" : "51.9117638",
			"lon" : "4.4788584",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 37
				},
				{
					"note" : 65,
					"velocity" : 28
				},
				{
					"note" : 70,
					"velocity" : 9
				}
			]
		},
		{
			"timestamp" : 1454857570,
			"lat" : "51.912066",
			"lon" : "4.4798888",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 34
				},
				{
					"note" : 65,
					"velocity" : 31
				},
				{
					"note" : 70,
					"velocity" : 10
				}
			]
		},
		{
			"timestamp" : 1454857581,
			"lat" : "51.9121811",
			"lon" : "4.4809833",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 31
				},
				{
					"note" : 65,
					"velocity" : 34
				},
				{
					"note" : 70,
					"velocity" : 10
				}
			]
		},
		{
			"timestamp" : 1454857591,
			"lat" : "51.9121798",
			"lon" : "4.4813086",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 30
				},
				{
					"note" : 65,
					"velocity" : 34
				},
				{
					"note" : 70,
					"velocity" : 10
				}
			]
		},
		{
			"timestamp" : 1454857602,
			"lat" : "51.9121798",
			"lon" : "4.4813086",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 30
				},
				{
					"note" : 65,
					"velocity" : 34
				},
				{
					"note" : 70,
					"velocity" : 10
				}
			]
		},
		{
			"timestamp" : 1454857612,
			"lat" : "51.9123708",
			"lon" : "4.4811936",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 30
				},
				{
					"note" : 65,
					"velocity" : 34
				},
				{
					"note" : 70,
					"velocity" : 11
				}
			]
		},
		{
			"timestamp" : 1454857624,
			"lat" : "51.912421",
			"lon" : "4.4813278",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 30
				},
				{
					"note" : 65,
					"velocity" : 34
				},
				{
					"note" : 70,
					"velocity" : 11
				}
			]
		},
		{
			"timestamp" : 1454857633,
			"lat" : "51.9122904",
			"lon" : "4.4816185",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 29
				},
				{
					"note" : 65,
					"velocity" : 35
				},
				{
					"note" : 70,
					"velocity" : 11
				}
			]
		},
		{
			"timestamp" : 1454857645,
			"lat" : "51.9123713",
			"lon" : "4.4820335",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 28
				},
				{
					"note" : 65,
					"velocity" : 36
				},
				{
					"note" : 70,
					"velocity" : 11
				}
			]
		},
		{
			"timestamp" : 1454857655,
			"lat" : "51.9123713",
			"lon" : "4.4820335",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 28
				},
				{
					"note" : 65,
					"velocity" : 36
				},
				{
					"note" : 70,
					"velocity" : 11
				}
			]
		},
		{
			"timestamp" : 1454857665,
			"lat" : "51.9129374",
			"lon" : "4.4821894",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 27
				},
				{
					"note" : 65,
					"velocity" : 36
				},
				{
					"note" : 70,
					"velocity" : 13
				}
			]
		},
		{
			"timestamp" : 1454857676,
			"lat" : "51.9129374",
			"lon" : "4.4821894",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 27
				},
				{
					"note" : 65,
					"velocity" : 36
				},
				{
					"note" : 70,
					"velocity" : 13
				}
			]
		},
		{
			"timestamp" : 1454857687,
			"lat" : "51.9130077",
			"lon" : "4.4820555",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 27
				},
				{
					"note" : 65,
					"velocity" : 36
				},
				{
					"note" : 70,
					"velocity" : 13
				}
			]
		},
		{
			"timestamp" : 1454857697,
			"lat" : "51.9131731",
			"lon" : "4.4820449",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 27
				},
				{
					"note" : 65,
					"velocity" : 36
				},
				{
					"note" : 70,
					"velocity" : 13
				}
			]
		},
		{
			"timestamp" : 1454857707,
			"lat" : "51.9132179",
			"lon" : "4.4818161",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 28
				},
				{
					"note" : 65,
					"velocity" : 35
				},
				{
					"note" : 70,
					"velocity" : 14
				}
			]
		},
		{
			"timestamp" : 1454857718,
			"lat" : "51.9132179",
			"lon" : "4.4818161",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 28
				},
				{
					"note" : 65,
					"velocity" : 35
				},
				{
					"note" : 70,
					"velocity" : 14
				}
			]
		},
		{
			"timestamp" : 1454857729,
			"lat" : "51.9131433",
			"lon" : "4.4817315",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 28
				},
				{
					"note" : 65,
					"velocity" : 35
				},
				{
					"note" : 70,
					"velocity" : 13
				}
			]
		},
		{
			"timestamp" : 1454857740,
			"lat" : "51.9128946",
			"lon" : "4.4818696",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 28
				},
				{
					"note" : 65,
					"velocity" : 35
				},
				{
					"note" : 70,
					"velocity" : 13
				}
			]
		},
		{
			"timestamp" : 1454857750,
			"lat" : "51.9122438",
			"lon" : "4.4819978",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 28
				},
				{
					"note" : 65,
					"velocity" : 36
				},
				{
					"note" : 70,
					"velocity" : 11
				}
			]
		},
		{
			"timestamp" : 1454857761,
			"lat" : "51.9116981",
			"lon" : "4.4830372",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 26
				},
				{
					"note" : 65,
					"velocity" : 40
				},
				{
					"note" : 70,
					"velocity" : 9
				}
			]
		},
		{
			"timestamp" : 1454857788,
			"lat" : "51.9095047",
			"lon" : "4.4855442",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 20
				},
				{
					"note" : 65,
					"velocity" : 48
				},
				{
					"note" : 69,
					"velocity" : 10
				}
			]
		},
		{
			"timestamp" : 1454857796,
			"lat" : "51.9090575",
			"lon" : "4.4867323",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 17
				},
				{
					"note" : 65,
					"velocity" : 52
				},
				{
					"note" : 69,
					"velocity" : 10
				}
			]
		},
		{
			"timestamp" : 1454857804,
			"lat" : "51.9090575",
			"lon" : "4.4867323",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 17
				},
				{
					"note" : 65,
					"velocity" : 52
				},
				{
					"note" : 69,
					"velocity" : 10
				}
			]
		},
		{
			"timestamp" : 1454857814,
			"lat" : "51.9076775",
			"lon" : "4.4890846",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 12
				},
				{
					"note" : 65,
					"velocity" : 57
				},
				{
					"note" : 69,
					"velocity" : 13
				}
			]
		},
		{
			"timestamp" : 1454857825,
			"lat" : "51.9075391",
			"lon" : "4.4897444",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 10
				},
				{
					"note" : 65,
					"velocity" : 58
				},
				{
					"note" : 69,
					"velocity" : 13
				}
			]
		},
		{
			"timestamp" : 1454857837,
			"lat" : "51.9074893",
			"lon" : "4.4907258",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 9
				},
				{
					"note" : 65,
					"velocity" : 61
				},
				{
					"note" : 69,
					"velocity" : 13
				}
			]
		},
		{
			"timestamp" : 1454857847,
			"lat" : "51.907725",
			"lon" : "4.4914896",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 7
				},
				{
					"note" : 65,
					"velocity" : 65
				},
				{
					"note" : 69,
					"velocity" : 11
				}
			]
		},
		{
			"timestamp" : 1454857857,
			"lat" : "51.907725",
			"lon" : "4.4914896",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 7
				},
				{
					"note" : 65,
					"velocity" : 65
				},
				{
					"note" : 69,
					"velocity" : 11
				}
			]
		},
		{
			"timestamp" : 1454857867,
			"lat" : "51.9080181",
			"lon" : "4.4918732",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 7
				},
				{
					"note" : 65,
					"velocity" : 69
				},
				{
					"note" : 69,
					"velocity" : 10
				}
			]
		},
		{
			"timestamp" : 1454857878,
			"lat" : "51.9080116",
			"lon" : "4.4915834",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 7
				},
				{
					"note" : 65,
					"velocity" : 67
				},
				{
					"note" : 69,
					"velocity" : 10
				}
			]
		},
		{
			"timestamp" : 1454857889,
			"lat" : "51.9081705",
			"lon" : "4.492096",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 7
				},
				{
					"note" : 65,
					"velocity" : 70
				},
				{
					"note" : 69,
					"velocity" : 10
				}
			]
		},
		{
			"timestamp" : 1454857899,
			"lat" : "51.9083208",
			"lon" : "4.4927959",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 5
				},
				{
					"note" : 65,
					"velocity" : 74
				},
				{
					"note" : 69,
					"velocity" : 9
				}
			]
		},
		{
			"timestamp" : 1454857909,
			"lat" : "51.907853",
			"lon" : "4.493907",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 3
				},
				{
					"note" : 65,
					"velocity" : 75
				},
				{
					"note" : 69,
					"velocity" : 9
				}
			]
		},
		{
			"timestamp" : 1454857921,
			"lat" : "51.907853",
			"lon" : "4.493907",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 3
				},
				{
					"note" : 65,
					"velocity" : 75
				},
				{
					"note" : 69,
					"velocity" : 9
				}
			]
		},
		{
			"timestamp" : 1454857931,
			"lat" : "51.9070289",
			"lon" : "4.4957929",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 7
				},
				{
					"note" : 65,
					"velocity" : 71
				},
				{
					"note" : 69,
					"velocity" : 9
				}
			]
		},
		{
			"timestamp" : 1454857948,
			"lat" : "51.9059075",
			"lon" : "4.4984921",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 13
				},
				{
					"note" : 65,
					"velocity" : 61
				},
				{
					"note" : 69,
					"velocity" : 9
				}
			]
		},
		{
			"timestamp" : 1454857951,
			"lat" : "51.9059586",
			"lon" : "4.498442",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 12
				},
				{
					"note" : 65,
					"velocity" : 62
				},
				{
					"note" : 69,
					"velocity" : 9
				}
			]
		},
		{
			"timestamp" : 1454857962,
			"lat" : "51.9059586",
			"lon" : "4.498442",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 12
				},
				{
					"note" : 65,
					"velocity" : 62
				},
				{
					"note" : 69,
					"velocity" : 9
				}
			]
		},
		{
			"timestamp" : 1454857972,
			"lat" : "51.9059038",
			"lon" : "4.4985802",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 13
				},
				{
					"note" : 65,
					"velocity" : 61
				},
				{
					"note" : 69,
					"velocity" : 9
				}
			]
		},
		{
			"timestamp" : 1454857983,
			"lat" : "51.905485",
			"lon" : "4.499352",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 15
				},
				{
					"note" : 65,
					"velocity" : 58
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454857993,
			"lat" : "51.905485",
			"lon" : "4.499352",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 15
				},
				{
					"note" : 65,
					"velocity" : 58
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454858006,
			"lat" : "51.9049967",
			"lon" : "4.5008475",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 18
				},
				{
					"note" : 65,
					"velocity" : 52
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454858014,
			"lat" : "51.9042871",
			"lon" : "4.5021791",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 21
				},
				{
					"note" : 65,
					"velocity" : 46
				},
				{
					"note" : 69,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454858025,
			"lat" : "51.9039914",
			"lon" : "4.5031594",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 23
				},
				{
					"note" : 65,
					"velocity" : 43
				},
				{
					"note" : 69,
					"velocity" : 6
				}
			]
		},
		{
			"timestamp" : 1454858039,
			"lat" : "51.903835",
			"lon" : "4.5033736",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 24
				},
				{
					"note" : 65,
					"velocity" : 42
				},
				{
					"note" : 68,
					"velocity" : 6
				}
			]
		},
		{
			"timestamp" : 1454858046,
			"lat" : "51.9037449",
			"lon" : "4.5034023",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 25
				},
				{
					"note" : 65,
					"velocity" : 42
				},
				{
					"note" : 69,
					"velocity" : 6
				}
			]
		},
		{
			"timestamp" : 1454858058,
			"lat" : "51.9037966",
			"lon" : "4.5037449",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 25
				},
				{
					"note" : 65,
					"velocity" : 41
				},
				{
					"note" : 68,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454858070,
			"lat" : "51.9037966",
			"lon" : "4.5037449",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 25
				},
				{
					"note" : 65,
					"velocity" : 41
				},
				{
					"note" : 68,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454858081,
			"lat" : "51.9039018",
			"lon" : "4.5040786",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 25
				},
				{
					"note" : 65,
					"velocity" : 41
				},
				{
					"note" : 68,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454858089,
			"lat" : "51.9038725",
			"lon" : "4.504053",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 25
				},
				{
					"note" : 65,
					"velocity" : 41
				},
				{
					"note" : 68,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454858100,
			"lat" : "51.9038725",
			"lon" : "4.504053",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 25
				},
				{
					"note" : 65,
					"velocity" : 41
				},
				{
					"note" : 68,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454858110,
			"lat" : "51.9038725",
			"lon" : "4.504053",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 25
				},
				{
					"note" : 65,
					"velocity" : 41
				},
				{
					"note" : 68,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454858120,
			"lat" : "51.9038725",
			"lon" : "4.504053",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 25
				},
				{
					"note" : 65,
					"velocity" : 41
				},
				{
					"note" : 68,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454858131,
			"lat" : "51.9038725",
			"lon" : "4.504053",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 25
				},
				{
					"note" : 65,
					"velocity" : 41
				},
				{
					"note" : 68,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454858141,
			"lat" : "51.9033516",
			"lon" : "4.5042689",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 27
				},
				{
					"note" : 65,
					"velocity" : 39
				},
				{
					"note" : 68,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454858152,
			"lat" : "51.9029001",
			"lon" : "4.5059073",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 31
				},
				{
					"note" : 65,
					"velocity" : 34
				},
				{
					"note" : 68,
					"velocity" : 9
				}
			]
		},
		{
			"timestamp" : 1454858163,
			"lat" : "51.9020034",
			"lon" : "4.5079772",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 37
				},
				{
					"note" : 65,
					"velocity" : 28
				},
				{
					"note" : 68,
					"velocity" : 11
				}
			]
		},
		{
			"timestamp" : 1454858174,
			"lat" : "51.901398",
			"lon" : "4.5096205",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 41
				},
				{
					"note" : 65,
					"velocity" : 23
				},
				{
					"note" : 68,
					"velocity" : 12
				}
			]
		},
		{
			"timestamp" : 1454858185,
			"lat" : "51.901398",
			"lon" : "4.5096205",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 41
				},
				{
					"note" : 65,
					"velocity" : 23
				},
				{
					"note" : 68,
					"velocity" : 12
				}
			]
		},
		{
			"timestamp" : 1454858197,
			"lat" : "51.9005062",
			"lon" : "4.5112112",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 47
				},
				{
					"note" : 65,
					"velocity" : 19
				},
				{
					"note" : 68,
					"velocity" : 13
				}
			]
		},
		{
			"timestamp" : 1454858204,
			"lat" : "51.9000628",
			"lon" : "4.5107661",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 49
				},
				{
					"note" : 65,
					"velocity" : 18
				},
				{
					"note" : 68,
					"velocity" : 11
				}
			]
		},
		{
			"timestamp" : 1454858215,
			"lat" : "51.9000628",
			"lon" : "4.5107661",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 49
				},
				{
					"note" : 65,
					"velocity" : 18
				},
				{
					"note" : 68,
					"velocity" : 11
				}
			]
		},
		{
			"timestamp" : 1454858225,
			"lat" : "51.8989876",
			"lon" : "4.5104314",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 56
				},
				{
					"note" : 65,
					"velocity" : 16
				},
				{
					"note" : 68,
					"velocity" : 9
				}
			]
		},
		{
			"timestamp" : 1454858240,
			"lat" : "51.898224",
			"lon" : "4.5107037",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 61
				},
				{
					"note" : 65,
					"velocity" : 13
				},
				{
					"note" : 68,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454858246,
			"lat" : "51.897634",
			"lon" : "4.5109123",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 66
				},
				{
					"note" : 65,
					"velocity" : 11
				},
				{
					"note" : 68,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454858257,
			"lat" : "51.8972958",
			"lon" : "4.5109534",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 69
				},
				{
					"note" : 65,
					"velocity" : 11
				},
				{
					"note" : 68,
					"velocity" : 6
				}
			]
		},
		{
			"timestamp" : 1454858269,
			"lat" : "51.8972958",
			"lon" : "4.5109534",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 69
				},
				{
					"note" : 65,
					"velocity" : 11
				},
				{
					"note" : 68,
					"velocity" : 6
				}
			]
		},
		{
			"timestamp" : 1454858280,
			"lat" : "51.8972332",
			"lon" : "4.5102321",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 68
				},
				{
					"note" : 65,
					"velocity" : 11
				},
				{
					"note" : 68,
					"velocity" : 5
				}
			]
		},
		{
			"timestamp" : 1454858288,
			"lat" : "51.8978689",
			"lon" : "4.5108814",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 64
				},
				{
					"note" : 65,
					"velocity" : 12
				},
				{
					"note" : 68,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454858300,
			"lat" : "51.8985035",
			"lon" : "4.5107221",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 59
				},
				{
					"note" : 65,
					"velocity" : 14
				},
				{
					"note" : 68,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454858309,
			"lat" : "51.8985035",
			"lon" : "4.5107221",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 59
				},
				{
					"note" : 65,
					"velocity" : 14
				},
				{
					"note" : 68,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454858323,
			"lat" : "51.9001886",
			"lon" : "4.5111052",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 49
				},
				{
					"note" : 65,
					"velocity" : 18
				},
				{
					"note" : 68,
					"velocity" : 12
				}
			]
		},
		{
			"timestamp" : 1454858331,
			"lat" : "51.9006211",
			"lon" : "4.5112605",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 46
				},
				{
					"note" : 65,
					"velocity" : 19
				},
				{
					"note" : 68,
					"velocity" : 13
				}
			]
		},
		{
			"timestamp" : 1454858354,
			"lat" : "51.9009311",
			"lon" : "4.5107921",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 44
				},
				{
					"note" : 65,
					"velocity" : 20
				},
				{
					"note" : 68,
					"velocity" : 13
				}
			]
		},
		{
			"timestamp" : 1454858355,
			"lat" : "51.9009311",
			"lon" : "4.5107921",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 44
				},
				{
					"note" : 65,
					"velocity" : 20
				},
				{
					"note" : 68,
					"velocity" : 13
				}
			]
		},
		{
			"timestamp" : 1454858362,
			"lat" : "51.90238",
			"lon" : "4.5073195",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 34
				},
				{
					"note" : 65,
					"velocity" : 30
				},
				{
					"note" : 68,
					"velocity" : 11
				}
			]
		},
		{
			"timestamp" : 1454858385,
			"lat" : "51.9033733",
			"lon" : "4.5048571",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 28
				},
				{
					"note" : 65,
					"velocity" : 38
				},
				{
					"note" : 68,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454858395,
			"lat" : "51.90338",
			"lon" : "4.5047673",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 27
				},
				{
					"note" : 65,
					"velocity" : 38
				},
				{
					"note" : 68,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454858401,
			"lat" : "51.9032299",
			"lon" : "4.5054186",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 29
				},
				{
					"note" : 65,
					"velocity" : 36
				},
				{
					"note" : 68,
					"velocity" : 9
				}
			]
		},
		{
			"timestamp" : 1454858404,
			"lat" : "51.90338",
			"lon" : "4.5047673",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 27
				},
				{
					"note" : 65,
					"velocity" : 38
				},
				{
					"note" : 68,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454858419,
			"lat" : "51.9037245",
			"lon" : "4.5039358",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 25
				},
				{
					"note" : 65,
					"velocity" : 41
				},
				{
					"note" : 68,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454858426,
			"lat" : "51.9038871",
			"lon" : "4.5034444",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 24
				},
				{
					"note" : 65,
					"velocity" : 42
				},
				{
					"note" : 68,
					"velocity" : 6
				}
			]
		},
		{
			"timestamp" : 1454858437,
			"lat" : "51.9038871",
			"lon" : "4.5034444",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 24
				},
				{
					"note" : 65,
					"velocity" : 42
				},
				{
					"note" : 68,
					"velocity" : 6
				}
			]
		},
		{
			"timestamp" : 1454858447,
			"lat" : "51.9038871",
			"lon" : "4.5034444",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 24
				},
				{
					"note" : 65,
					"velocity" : 42
				},
				{
					"note" : 68,
					"velocity" : 6
				}
			]
		},
		{
			"timestamp" : 1454858457,
			"lat" : "51.9038871",
			"lon" : "4.5034444",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 24
				},
				{
					"note" : 65,
					"velocity" : 42
				},
				{
					"note" : 68,
					"velocity" : 6
				}
			]
		},
		{
			"timestamp" : 1454858471,
			"lat" : "51.9053581",
			"lon" : "4.5000438",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 16
				},
				{
					"note" : 65,
					"velocity" : 56
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454858478,
			"lat" : "51.9056697",
			"lon" : "4.4992009",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 14
				},
				{
					"note" : 65,
					"velocity" : 59
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454858489,
			"lat" : "51.9060174",
			"lon" : "4.4986784",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 12
				},
				{
					"note" : 65,
					"velocity" : 62
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454858499,
			"lat" : "51.9059395",
			"lon" : "4.4985501",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 13
				},
				{
					"note" : 65,
					"velocity" : 62
				},
				{
					"note" : 69,
					"velocity" : 9
				}
			]
		},
		{
			"timestamp" : 1454858514,
			"lat" : "51.9055714",
			"lon" : "4.4983116",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 13
				},
				{
					"note" : 65,
					"velocity" : 59
				},
				{
					"note" : 69,
					"velocity" : 10
				}
			]
		},
		{
			"timestamp" : 1454858520,
			"lat" : "51.9055714",
			"lon" : "4.4983116",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 13
				},
				{
					"note" : 65,
					"velocity" : 59
				},
				{
					"note" : 69,
					"velocity" : 10
				}
			]
		},
		{
			"timestamp" : 1454858531,
			"lat" : "51.9060439",
			"lon" : "4.4981669",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 12
				},
				{
					"note" : 65,
					"velocity" : 63
				},
				{
					"note" : 69,
					"velocity" : 9
				}
			]
		},
		{
			"timestamp" : 1454858542,
			"lat" : "51.9075006",
			"lon" : "4.4946576",
			"chord" : [
				{
					"note" : 60,
					"velocity" : 5
				},
				{
					"note" : 65,
					"velocity" : 74
				},
				{
					"note" : 69,
					"velocity" : 9
				}
			]
		},
		{
			"timestamp" : 1454858552,
			"lat" : "51.9080173",
			"lon" : "4.493962",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 3
				},
				{
					"note" : 65,
					"velocity" : 76
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454858562,
			"lat" : "51.9085323",
			"lon" : "4.4930279",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 5
				},
				{
					"note" : 65,
					"velocity" : 77
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454858574,
			"lat" : "51.908351",
			"lon" : "4.4919834",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 7
				},
				{
					"note" : 65,
					"velocity" : 71
				},
				{
					"note" : 69,
					"velocity" : 9
				}
			]
		},
		{
			"timestamp" : 1454858583,
			"lat" : "51.908351",
			"lon" : "4.4919834",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 7
				},
				{
					"note" : 65,
					"velocity" : 71
				},
				{
					"note" : 69,
					"velocity" : 9
				}
			]
		},
		{
			"timestamp" : 1454858595,
			"lat" : "51.9079971",
			"lon" : "4.4917118",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 7
				},
				{
					"note" : 65,
					"velocity" : 68
				},
				{
					"note" : 69,
					"velocity" : 10
				}
			]
		},
		{
			"timestamp" : 1454858606,
			"lat" : "51.9079979",
			"lon" : "4.4916722",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 7
				},
				{
					"note" : 65,
					"velocity" : 68
				},
				{
					"note" : 69,
					"velocity" : 10
				}
			]
		},
		{
			"timestamp" : 1454858615,
			"lat" : "51.9078154",
			"lon" : "4.4913453",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 8
				},
				{
					"note" : 65,
					"velocity" : 65
				},
				{
					"note" : 69,
					"velocity" : 11
				}
			]
		},
		{
			"timestamp" : 1454858625,
			"lat" : "51.9078154",
			"lon" : "4.4913453",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 8
				},
				{
					"note" : 65,
					"velocity" : 65
				},
				{
					"note" : 69,
					"velocity" : 11
				}
			]
		},
		{
			"timestamp" : 1454858636,
			"lat" : "51.9075186",
			"lon" : "4.4907105",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 9
				},
				{
					"note" : 65,
					"velocity" : 62
				},
				{
					"note" : 69,
					"velocity" : 12
				}
			]
		},
		{
			"timestamp" : 1454858647,
			"lat" : "51.9077333",
			"lon" : "4.4902818",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 10
				},
				{
					"note" : 65,
					"velocity" : 61
				},
				{
					"note" : 69,
					"velocity" : 12
				}
			]
		},
		{
			"timestamp" : 1454858657,
			"lat" : "51.9081952",
			"lon" : "4.4890347",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 12
				},
				{
					"note" : 65,
					"velocity" : 58
				},
				{
					"note" : 69,
					"velocity" : 12
				}
			]
		},
		{
			"timestamp" : 1454858668,
			"lat" : "51.9081952",
			"lon" : "4.4890347",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 12
				},
				{
					"note" : 65,
					"velocity" : 58
				},
				{
					"note" : 69,
					"velocity" : 12
				}
			]
		},
		{
			"timestamp" : 1454858678,
			"lat" : "51.9093819",
			"lon" : "4.4860753",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 19
				},
				{
					"note" : 65,
					"velocity" : 50
				},
				{
					"note" : 69,
					"velocity" : 10
				}
			]
		},
		{
			"timestamp" : 1454858691,
			"lat" : "51.9100547",
			"lon" : "4.4844288",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 22
				},
				{
					"note" : 65,
					"velocity" : 44
				},
				{
					"note" : 69,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454858701,
			"lat" : "51.9106046",
			"lon" : "4.4830473",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 26
				},
				{
					"note" : 65,
					"velocity" : 40
				},
				{
					"note" : 69,
					"velocity" : 7
				}
			]
		},
		{
			"timestamp" : 1454858710,
			"lat" : "51.9113089",
			"lon" : "4.4825228",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 27
				},
				{
					"note" : 65,
					"velocity" : 38
				},
				{
					"note" : 70,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454858722,
			"lat" : "51.9113089",
			"lon" : "4.4825228",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 27
				},
				{
					"note" : 65,
					"velocity" : 38
				},
				{
					"note" : 70,
					"velocity" : 8
				}
			]
		},
		{
			"timestamp" : 1454858732,
			"lat" : "51.9118105",
			"lon" : "4.482293",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 28
				},
				{
					"note" : 65,
					"velocity" : 38
				},
				{
					"note" : 70,
					"velocity" : 9
				}
			]
		},
		{
			"timestamp" : 1454858742,
			"lat" : "51.9118712",
			"lon" : "4.4822397",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 28
				},
				{
					"note" : 65,
					"velocity" : 37
				},
				{
					"note" : 70,
					"velocity" : 9
				}
			]
		},
		{
			"timestamp" : 1454858752,
			"lat" : "51.9121494",
			"lon" : "4.4823341",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 27
				},
				{
					"note" : 65,
					"velocity" : 37
				},
				{
					"note" : 70,
					"velocity" : 10
				}
			]
		},
		{
			"timestamp" : 1454858762,
			"lat" : "51.9121494",
			"lon" : "4.4823341",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 27
				},
				{
					"note" : 65,
					"velocity" : 37
				},
				{
					"note" : 70,
					"velocity" : 10
				}
			]
		},
		{
			"timestamp" : 1454858775,
			"lat" : "51.9121789",
			"lon" : "4.4821686",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 28
				},
				{
					"note" : 65,
					"velocity" : 37
				},
				{
					"note" : 70,
					"velocity" : 10
				}
			]
		},
		{
			"timestamp" : 1454858784,
			"lat" : "51.9127878",
			"lon" : "4.482093",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 28
				},
				{
					"note" : 65,
					"velocity" : 36
				},
				{
					"note" : 70,
					"velocity" : 12
				}
			]
		},
		{
			"timestamp" : 1454858795,
			"lat" : "51.9129646",
			"lon" : "4.4820438",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 28
				},
				{
					"note" : 65,
					"velocity" : 36
				},
				{
					"note" : 70,
					"velocity" : 13
				}
			]
		},
		{
			"timestamp" : 1454858805,
			"lat" : "51.9129646",
			"lon" : "4.4820438",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 28
				},
				{
					"note" : 65,
					"velocity" : 36
				},
				{
					"note" : 70,
					"velocity" : 13
				}
			]
		},
		{
			"timestamp" : 1454858815,
			"lat" : "51.913383",
			"lon" : "4.4821894",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 27
				},
				{
					"note" : 65,
					"velocity" : 36
				},
				{
					"note" : 70,
					"velocity" : 14
				}
			]
		},
		{
			"timestamp" : 1454858826,
			"lat" : "51.9146934",
			"lon" : "4.4818786",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 26
				},
				{
					"note" : 65,
					"velocity" : 33
				},
				{
					"note" : 70,
					"velocity" : 18
				}
			]
		},
		{
			"timestamp" : 1454858837,
			"lat" : "51.9157072",
			"lon" : "4.4818937",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 25
				},
				{
					"note" : 65,
					"velocity" : 31
				},
				{
					"note" : 70,
					"velocity" : 22
				}
			]
		},
		{
			"timestamp" : 1454858848,
			"lat" : "51.9169413",
			"lon" : "4.4820178",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 22
				},
				{
					"note" : 65,
					"velocity" : 29
				},
				{
					"note" : 70,
					"velocity" : 27
				}
			]
		},
		{
			"timestamp" : 1454858859,
			"lat" : "51.9170983",
			"lon" : "4.4816906",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 23
				},
				{
					"note" : 65,
					"velocity" : 28
				},
				{
					"note" : 70,
					"velocity" : 27
				}
			]
		},
		{
			"timestamp" : 1454858868,
			"lat" : "51.9170983",
			"lon" : "4.4816906",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 23
				},
				{
					"note" : 65,
					"velocity" : 28
				},
				{
					"note" : 70,
					"velocity" : 27
				}
			]
		},
		{
			"timestamp" : 1454858879,
			"lat" : "51.91803",
			"lon" : "4.4803077",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 23
				},
				{
					"note" : 65,
					"velocity" : 23
				},
				{
					"note" : 70,
					"velocity" : 31
				}
			]
		},
		{
			"timestamp" : 1454858890,
			"lat" : "51.9187034",
			"lon" : "4.480271",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 22
				},
				{
					"note" : 65,
					"velocity" : 21
				},
				{
					"note" : 70,
					"velocity" : 34
				}
			]
		},
		{
			"timestamp" : 1454858900,
			"lat" : "51.9188295",
			"lon" : "4.4805719",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 21
				},
				{
					"note" : 65,
					"velocity" : 22
				},
				{
					"note" : 70,
					"velocity" : 35
				}
			]
		},
		{
			"timestamp" : 1454858910,
			"lat" : "51.9188768",
			"lon" : "4.4805527",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 21
				},
				{
					"note" : 65,
					"velocity" : 21
				},
				{
					"note" : 70,
					"velocity" : 35
				}
			]
		},
		{
			"timestamp" : 1454858921,
			"lat" : "51.9188768",
			"lon" : "4.4805527",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 21
				},
				{
					"note" : 65,
					"velocity" : 21
				},
				{
					"note" : 70,
					"velocity" : 35
				}
			]
		},
		{
			"timestamp" : 1454858932,
			"lat" : "51.9189074",
			"lon" : "4.4804055",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 21
				},
				{
					"note" : 65,
					"velocity" : 21
				},
				{
					"note" : 70,
					"velocity" : 35
				}
			]
		},
		{
			"timestamp" : 1454858942,
			"lat" : "51.9188227",
			"lon" : "4.480446",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 21
				},
				{
					"note" : 65,
					"velocity" : 21
				},
				{
					"note" : 70,
					"velocity" : 35
				}
			]
		},
		{
			"timestamp" : 1454858952,
			"lat" : "51.9188227",
			"lon" : "4.480446",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 21
				},
				{
					"note" : 65,
					"velocity" : 21
				},
				{
					"note" : 70,
					"velocity" : 35
				}
			]
		},
		{
			"timestamp" : 1454858963,
			"lat" : "51.9186894",
			"lon" : "4.4813041",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 20
				},
				{
					"note" : 65,
					"velocity" : 23
				},
				{
					"note" : 70,
					"velocity" : 34
				}
			]
		},
		{
			"timestamp" : 1454858974,
			"lat" : "51.9186894",
			"lon" : "4.4813041",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 20
				},
				{
					"note" : 65,
					"velocity" : 23
				},
				{
					"note" : 70,
					"velocity" : 34
				}
			]
		},
		{
			"timestamp" : 1454858985,
			"lat" : "51.9188969",
			"lon" : "4.4811939",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 20
				},
				{
					"note" : 65,
					"velocity" : 22
				},
				{
					"note" : 70,
					"velocity" : 35
				}
			]
		},
		{
			"timestamp" : 1454858995,
			"lat" : "51.9188773",
			"lon" : "4.4812429",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 20
				},
				{
					"note" : 65,
					"velocity" : 23
				},
				{
					"note" : 70,
					"velocity" : 35
				}
			]
		},
		{
			"timestamp" : 1454859005,
			"lat" : "51.9188773",
			"lon" : "4.4812429",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 20
				},
				{
					"note" : 65,
					"velocity" : 23
				},
				{
					"note" : 70,
					"velocity" : 35
				}
			]
		},
		{
			"timestamp" : 1454859016,
			"lat" : "51.9188773",
			"lon" : "4.4812429",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 20
				},
				{
					"note" : 65,
					"velocity" : 23
				},
				{
					"note" : 70,
					"velocity" : 35
				}
			]
		},
		{
			"timestamp" : 1454859026,
			"lat" : "51.9188773",
			"lon" : "4.4812429",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 20
				},
				{
					"note" : 65,
					"velocity" : 23
				},
				{
					"note" : 70,
					"velocity" : 35
				}
			]
		},
		{
			"timestamp" : 1454859037,
			"lat" : "51.918384",
			"lon" : "4.481087",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 21
				},
				{
					"note" : 65,
					"velocity" : 23
				},
				{
					"note" : 70,
					"velocity" : 33
				}
			]
		},
		{
			"timestamp" : 1454859047,
			"lat" : "51.9183455",
			"lon" : "4.4814313",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 21
				},
				{
					"note" : 65,
					"velocity" : 24
				},
				{
					"note" : 70,
					"velocity" : 33
				}
			]
		},
		{
			"timestamp" : 1454859059,
			"lat" : "51.918324",
			"lon" : "4.4813419",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 21
				},
				{
					"note" : 65,
					"velocity" : 24
				},
				{
					"note" : 70,
					"velocity" : 33
				}
			]
		},
		{
			"timestamp" : 1454859068,
			"lat" : "51.918324",
			"lon" : "4.4813419",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 21
				},
				{
					"note" : 65,
					"velocity" : 24
				},
				{
					"note" : 70,
					"velocity" : 33
				}
			]
		},
		{
			"timestamp" : 1454859079,
			"lat" : "51.918324",
			"lon" : "4.4813419",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 21
				},
				{
					"note" : 65,
					"velocity" : 24
				},
				{
					"note" : 70,
					"velocity" : 33
				}
			]
		},
		{
			"timestamp" : 1454859090,
			"lat" : "51.918324",
			"lon" : "4.4813419",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 21
				},
				{
					"note" : 65,
					"velocity" : 24
				},
				{
					"note" : 70,
					"velocity" : 33
				}
			]
		},
		{
			"timestamp" : 1454859100,
			"lat" : "51.9182321",
			"lon" : "4.4813496",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 21
				},
				{
					"note" : 65,
					"velocity" : 24
				},
				{
					"note" : 70,
					"velocity" : 32
				}
			]
		},
		{
			"timestamp" : 1454859110,
			"lat" : "51.9188893",
			"lon" : "4.4807491",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 21
				},
				{
					"note" : 65,
					"velocity" : 22
				},
				{
					"note" : 70,
					"velocity" : 35
				}
			]
		},
		{
			"timestamp" : 1454859121,
			"lat" : "51.9188893",
			"lon" : "4.4807491",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 21
				},
				{
					"note" : 65,
					"velocity" : 22
				},
				{
					"note" : 70,
					"velocity" : 35
				}
			]
		},
		{
			"timestamp" : 1454859131,
			"lat" : "51.918528",
			"lon" : "4.4804075",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 22
				},
				{
					"note" : 65,
					"velocity" : 22
				},
				{
					"note" : 70,
					"velocity" : 34
				}
			]
		},
		{
			"timestamp" : 1454859142,
			"lat" : "51.918528",
			"lon" : "4.4804075",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 22
				},
				{
					"note" : 65,
					"velocity" : 22
				},
				{
					"note" : 70,
					"velocity" : 34
				}
			]
		},
		{
			"timestamp" : 1454859153,
			"lat" : "51.9180514",
			"lon" : "4.480912",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 22
				},
				{
					"note" : 65,
					"velocity" : 24
				},
				{
					"note" : 70,
					"velocity" : 32
				}
			]
		},
		{
			"timestamp" : 1454859163,
			"lat" : "51.9177046",
			"lon" : "4.4816433",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 22
				},
				{
					"note" : 65,
					"velocity" : 26
				},
				{
					"note" : 70,
					"velocity" : 30
				}
			]
		},
		{
			"timestamp" : 1454859173,
			"lat" : "51.9182798",
			"lon" : "4.4828623",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 18
				},
				{
					"note" : 65,
					"velocity" : 27
				},
				{
					"note" : 70,
					"velocity" : 32
				}
			]
		},
		{
			"timestamp" : 1454859184,
			"lat" : "51.9179684",
			"lon" : "4.481802",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 21
				},
				{
					"note" : 65,
					"velocity" : 26
				},
				{
					"note" : 70,
					"velocity" : 31
				}
			]
		},
		{
			"timestamp" : 1454859198,
			"lat" : "51.9187821",
			"lon" : "4.4834303",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 16
				},
				{
					"note" : 65,
					"velocity" : 27
				},
				{
					"note" : 70,
					"velocity" : 34
				}
			]
		},
		{
			"timestamp" : 1454859205,
			"lat" : "51.9186235",
			"lon" : "4.4833188",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 17
				},
				{
					"note" : 65,
					"velocity" : 27
				},
				{
					"note" : 70,
					"velocity" : 33
				}
			]
		},
		{
			"timestamp" : 1454859215,
			"lat" : "51.9186235",
			"lon" : "4.4833188",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 17
				},
				{
					"note" : 65,
					"velocity" : 27
				},
				{
					"note" : 70,
					"velocity" : 33
				}
			]
		},
		{
			"timestamp" : 1454859226,
			"lat" : "51.9186917",
			"lon" : "4.4860295",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 12
				},
				{
					"note" : 65,
					"velocity" : 32
				},
				{
					"note" : 70,
					"velocity" : 32
				}
			]
		},
		{
			"timestamp" : 1454859238,
			"lat" : "51.9194136",
			"lon" : "4.4867423",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 10
				},
				{
					"note" : 65,
					"velocity" : 30
				},
				{
					"note" : 70,
					"velocity" : 34
				}
			]
		},
		{
			"timestamp" : 1454859249,
			"lat" : "51.9195294",
			"lon" : "4.4879292",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 8
				},
				{
					"note" : 65,
					"velocity" : 32
				},
				{
					"note" : 70,
					"velocity" : 33
				}
			]
		},
		{
			"timestamp" : 1454859259,
			"lat" : "51.9197887",
			"lon" : "4.4888104",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 7
				},
				{
					"note" : 65,
					"velocity" : 32
				},
				{
					"note" : 70,
					"velocity" : 33
				}
			]
		},
		{
			"timestamp" : 1454859268,
			"lat" : "51.9197887",
			"lon" : "4.4888104",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 7
				},
				{
					"note" : 65,
					"velocity" : 32
				},
				{
					"note" : 70,
					"velocity" : 33
				}
			]
		},
		{
			"timestamp" : 1454859279,
			"lat" : "51.9198952",
			"lon" : "4.4889408",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 7
				},
				{
					"note" : 65,
					"velocity" : 32
				},
				{
					"note" : 70,
					"velocity" : 33
				}
			]
		},
		{
			"timestamp" : 1454859289,
			"lat" : "51.9198952",
			"lon" : "4.4889408",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 7
				},
				{
					"note" : 65,
					"velocity" : 32
				},
				{
					"note" : 70,
					"velocity" : 33
				}
			]
		},
		{
			"timestamp" : 1454859300,
			"lat" : "51.9198952",
			"lon" : "4.4889408",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 7
				},
				{
					"note" : 65,
					"velocity" : 32
				},
				{
					"note" : 70,
					"velocity" : 33
				}
			]
		},
		{
			"timestamp" : 1454859310,
			"lat" : "51.9202364",
			"lon" : "4.490054",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 10
				},
				{
					"note" : 65,
					"velocity" : 32
				},
				{
					"note" : 70,
					"velocity" : 33
				}
			]
		},
		{
			"timestamp" : 1454859321,
			"lat" : "51.9202364",
			"lon" : "4.490054",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 10
				},
				{
					"note" : 65,
					"velocity" : 32
				},
				{
					"note" : 70,
					"velocity" : 33
				}
			]
		},
		{
			"timestamp" : 1454859332,
			"lat" : "51.9205044",
			"lon" : "4.490602",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 11
				},
				{
					"note" : 65,
					"velocity" : 31
				},
				{
					"note" : 70,
					"velocity" : 33
				}
			]
		},
		{
			"timestamp" : 1454859343,
			"lat" : "51.9210656",
			"lon" : "4.4928331",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 16
				},
				{
					"note" : 65,
					"velocity" : 31
				},
				{
					"note" : 70,
					"velocity" : 30
				}
			]
		},
		{
			"timestamp" : 1454859353,
			"lat" : "51.9214112",
			"lon" : "4.4939894",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 18
				},
				{
					"note" : 65,
					"velocity" : 30
				},
				{
					"note" : 70,
					"velocity" : 29
				}
			]
		},
		{
			"timestamp" : 1454859363,
			"lat" : "51.9214638",
			"lon" : "4.4941577",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 19
				},
				{
					"note" : 65,
					"velocity" : 30
				},
				{
					"note" : 70,
					"velocity" : 29
				}
			]
		},
		{
			"timestamp" : 1454859374,
			"lat" : "51.9214638",
			"lon" : "4.4941577",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 19
				},
				{
					"note" : 65,
					"velocity" : 30
				},
				{
					"note" : 70,
					"velocity" : 29
				}
			]
		},
		{
			"timestamp" : 1454859385,
			"lat" : "51.9215557",
			"lon" : "4.4944769",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 19
				},
				{
					"note" : 65,
					"velocity" : 30
				},
				{
					"note" : 70,
					"velocity" : 29
				}
			]
		},
		{
			"timestamp" : 1454859396,
			"lat" : "51.9220467",
			"lon" : "4.4958012",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 23
				},
				{
					"note" : 65,
					"velocity" : 28
				},
				{
					"note" : 70,
					"velocity" : 27
				}
			]
		},
		{
			"timestamp" : 1454859405,
			"lat" : "51.9222058",
			"lon" : "4.4962675",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 24
				},
				{
					"note" : 65,
					"velocity" : 27
				},
				{
					"note" : 70,
					"velocity" : 26
				}
			]
		},
		{
			"timestamp" : 1454859416,
			"lat" : "51.9221979",
			"lon" : "4.4963113",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 24
				},
				{
					"note" : 65,
					"velocity" : 27
				},
				{
					"note" : 70,
					"velocity" : 26
				}
			]
		},
		{
			"timestamp" : 1454859427,
			"lat" : "51.9221979",
			"lon" : "4.4963113",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 24
				},
				{
					"note" : 65,
					"velocity" : 27
				},
				{
					"note" : 70,
					"velocity" : 26
				}
			]
		},
		{
			"timestamp" : 1454859437,
			"lat" : "51.9222493",
			"lon" : "4.4964282",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 25
				},
				{
					"note" : 65,
					"velocity" : 27
				},
				{
					"note" : 70,
					"velocity" : 26
				}
			]
		},
		{
			"timestamp" : 1454859447,
			"lat" : "51.9227177",
			"lon" : "4.4975373",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 28
				},
				{
					"note" : 65,
					"velocity" : 25
				},
				{
					"note" : 70,
					"velocity" : 25
				}
			]
		},
		{
			"timestamp" : 1454859458,
			"lat" : "51.9232663",
			"lon" : "4.4982291",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 31
				},
				{
					"note" : 65,
					"velocity" : 23
				},
				{
					"note" : 70,
					"velocity" : 24
				}
			]
		},
		{
			"timestamp" : 1454859469,
			"lat" : "51.9231852",
			"lon" : "4.4985396",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 31
				},
				{
					"note" : 65,
					"velocity" : 23
				},
				{
					"note" : 70,
					"velocity" : 23
				}
			]
		},
		{
			"timestamp" : 1454859479,
			"lat" : "51.9231514",
			"lon" : "4.4985024",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 31
				},
				{
					"note" : 65,
					"velocity" : 23
				},
				{
					"note" : 70,
					"velocity" : 23
				}
			]
		},
		{
			"timestamp" : 1454859490,
			"lat" : "51.9233051",
			"lon" : "4.4985784",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 32
				},
				{
					"note" : 65,
					"velocity" : 23
				},
				{
					"note" : 70,
					"velocity" : 24
				}
			]
		},
		{
			"timestamp" : 1454859500,
			"lat" : "51.9233051",
			"lon" : "4.4985784",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 32
				},
				{
					"note" : 65,
					"velocity" : 23
				},
				{
					"note" : 70,
					"velocity" : 24
				}
			]
		},
		{
			"timestamp" : 1454859513,
			"lat" : "51.9230948",
			"lon" : "4.4976545",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 29
				},
				{
					"note" : 65,
					"velocity" : 24
				},
				{
					"note" : 70,
					"velocity" : 25
				}
			]
		},
		{
			"timestamp" : 1454859521,
			"lat" : "51.9230322",
			"lon" : "4.4975012",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 28
				},
				{
					"note" : 65,
					"velocity" : 24
				},
				{
					"note" : 70,
					"velocity" : 25
				}
			]
		},
		{
			"timestamp" : 1454859532,
			"lat" : "51.9228404",
			"lon" : "4.497335",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 28
				},
				{
					"note" : 65,
					"velocity" : 25
				},
				{
					"note" : 70,
					"velocity" : 25
				}
			]
		},
		{
			"timestamp" : 1454859543,
			"lat" : "51.9226634",
			"lon" : "4.4967244",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 26
				},
				{
					"note" : 65,
					"velocity" : 25
				},
				{
					"note" : 70,
					"velocity" : 26
				}
			]
		},
		{
			"timestamp" : 1454859552,
			"lat" : "51.9226634",
			"lon" : "4.4967244",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 26
				},
				{
					"note" : 65,
					"velocity" : 25
				},
				{
					"note" : 70,
					"velocity" : 26
				}
			]
		},
		{
			"timestamp" : 1454859564,
			"lat" : "51.9219632",
			"lon" : "4.4953277",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 22
				},
				{
					"note" : 65,
					"velocity" : 28
				},
				{
					"note" : 70,
					"velocity" : 28
				}
			]
		},
		{
			"timestamp" : 1454859574,
			"lat" : "51.921668",
			"lon" : "4.494339",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 19
				},
				{
					"note" : 65,
					"velocity" : 29
				},
				{
					"note" : 70,
					"velocity" : 29
				}
			]
		},
		{
			"timestamp" : 1454859585,
			"lat" : "51.9214242",
			"lon" : "4.4941627",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 19
				},
				{
					"note" : 65,
					"velocity" : 30
				},
				{
					"note" : 70,
					"velocity" : 29
				}
			]
		},
		{
			"timestamp" : 1454859595,
			"lat" : "51.9216284",
			"lon" : "4.4940673",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 19
				},
				{
					"note" : 65,
					"velocity" : 29
				},
				{
					"note" : 70,
					"velocity" : 30
				}
			]
		},
		{
			"timestamp" : 1454859605,
			"lat" : "51.9216284",
			"lon" : "4.4940673",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 19
				},
				{
					"note" : 65,
					"velocity" : 29
				},
				{
					"note" : 70,
					"velocity" : 30
				}
			]
		},
		{
			"timestamp" : 1454859616,
			"lat" : "51.9214088",
			"lon" : "4.493509",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 17
				},
				{
					"note" : 65,
					"velocity" : 30
				},
				{
					"note" : 70,
					"velocity" : 30
				}
			]
		},
		{
			"timestamp" : 1454859627,
			"lat" : "51.9205457",
			"lon" : "4.4913764",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 12
				},
				{
					"note" : 65,
					"velocity" : 32
				},
				{
					"note" : 70,
					"velocity" : 31
				}
			]
		},
		{
			"timestamp" : 1454859638,
			"lat" : "51.9204411",
			"lon" : "4.4905074",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 11
				},
				{
					"note" : 65,
					"velocity" : 31
				},
				{
					"note" : 70,
					"velocity" : 33
				}
			]
		},
		{
			"timestamp" : 1454859648,
			"lat" : "51.9204411",
			"lon" : "4.4905074",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 11
				},
				{
					"note" : 65,
					"velocity" : 31
				},
				{
					"note" : 70,
					"velocity" : 33
				}
			]
		},
		{
			"timestamp" : 1454859659,
			"lat" : "51.9195056",
			"lon" : "4.4890463",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 7
				},
				{
					"note" : 65,
					"velocity" : 33
				},
				{
					"note" : 70,
					"velocity" : 31
				}
			]
		},
		{
			"timestamp" : 1454859668,
			"lat" : "51.919773",
			"lon" : "4.489057",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 7
				},
				{
					"note" : 65,
					"velocity" : 32
				},
				{
					"note" : 70,
					"velocity" : 32
				}
			]
		},
		{
			"timestamp" : 1454859679,
			"lat" : "51.9198004",
			"lon" : "4.4889885",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 7
				},
				{
					"note" : 65,
					"velocity" : 32
				},
				{
					"note" : 70,
					"velocity" : 33
				}
			]
		},
		{
			"timestamp" : 1454859689,
			"lat" : "51.9197016",
			"lon" : "4.4888832",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 7
				},
				{
					"note" : 65,
					"velocity" : 32
				},
				{
					"note" : 70,
					"velocity" : 32
				}
			]
		},
		{
			"timestamp" : 1454859700,
			"lat" : "51.9197016",
			"lon" : "4.4888832",
			"chord" : [
				{
					"note" : 61,
					"velocity" : 7
				},
				{
					"note" : 65,
					"velocity" : 32
				},
				{
					"note" : 70,
					"velocity" : 32
				}
			]
		},
		{
			"timestamp" : 1454859730,
			"lat" : "51.9186063",
			"lon" : "4.4861784",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 12
				},
				{
					"note" : 65,
					"velocity" : 32
				},
				{
					"note" : 70,
					"velocity" : 31
				}
			]
		},
		{
			"timestamp" : 1454859732,
			"lat" : "51.9185443",
			"lon" : "4.4843505",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 15
				},
				{
					"note" : 65,
					"velocity" : 29
				},
				{
					"note" : 70,
					"velocity" : 32
				}
			]
		},
		{
			"timestamp" : 1454859742,
			"lat" : "51.9180217",
			"lon" : "4.4815201",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 21
				},
				{
					"note" : 65,
					"velocity" : 25
				},
				{
					"note" : 70,
					"velocity" : 31
				}
			]
		},
		{
			"timestamp" : 1454859753,
			"lat" : "51.9183359",
			"lon" : "4.481861",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 20
				},
				{
					"note" : 65,
					"velocity" : 25
				},
				{
					"note" : 70,
					"velocity" : 33
				}
			]
		},
		{
			"timestamp" : 1454859763,
			"lat" : "51.9173554",
			"lon" : "4.4811599",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 23
				},
				{
					"note" : 65,
					"velocity" : 26
				},
				{
					"note" : 70,
					"velocity" : 29
				}
			]
		},
		{
			"timestamp" : 1454859774,
			"lat" : "51.9173554",
			"lon" : "4.4811599",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 23
				},
				{
					"note" : 65,
					"velocity" : 26
				},
				{
					"note" : 70,
					"velocity" : 29
				}
			]
		},
		{
			"timestamp" : 1454859784,
			"lat" : "51.9185871",
			"lon" : "4.4808942",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 21
				},
				{
					"note" : 65,
					"velocity" : 23
				},
				{
					"note" : 70,
					"velocity" : 34
				}
			]
		},
		{
			"timestamp" : 1454859796,
			"lat" : "51.9187776",
			"lon" : "4.4805766",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 21
				},
				{
					"note" : 65,
					"velocity" : 22
				},
				{
					"note" : 70,
					"velocity" : 35
				}
			]
		},
		{
			"timestamp" : 1454859806,
			"lat" : "51.9187776",
			"lon" : "4.4805766",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 21
				},
				{
					"note" : 65,
					"velocity" : 22
				},
				{
					"note" : 70,
					"velocity" : 35
				}
			]
		},
		{
			"timestamp" : 1454859816,
			"lat" : "51.9182477",
			"lon" : "4.4812513",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 21
				},
				{
					"note" : 65,
					"velocity" : 24
				},
				{
					"note" : 70,
					"velocity" : 32
				}
			]
		},
		{
			"timestamp" : 1454859826,
			"lat" : "51.9185417",
			"lon" : "4.4808414",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 21
				},
				{
					"note" : 65,
					"velocity" : 23
				},
				{
					"note" : 70,
					"velocity" : 34
				}
			]
		},
		{
			"timestamp" : 1454859838,
			"lat" : "51.919912",
			"lon" : "4.4799727",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 20
				},
				{
					"note" : 65,
					"velocity" : 18
				},
				{
					"note" : 70,
					"velocity" : 40
				}
			]
		},
		{
			"timestamp" : 1454859847,
			"lat" : "51.920773",
			"lon" : "4.4798502",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 18
				},
				{
					"note" : 65,
					"velocity" : 16
				},
				{
					"note" : 70,
					"velocity" : 45
				}
			]
		},
		{
			"timestamp" : 1454859858,
			"lat" : "51.9216599",
			"lon" : "4.4792244",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 16
				},
				{
					"note" : 65,
					"velocity" : 13
				},
				{
					"note" : 70,
					"velocity" : 50
				}
			]
		},
		{
			"timestamp" : 1454859870,
			"lat" : "51.9225301",
			"lon" : "4.4787914",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 15
				},
				{
					"note" : 65,
					"velocity" : 11
				},
				{
					"note" : 70,
					"velocity" : 55
				}
			]
		},
		{
			"timestamp" : 1454859878,
			"lat" : "51.9225301",
			"lon" : "4.4787914",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 15
				},
				{
					"note" : 65,
					"velocity" : 11
				},
				{
					"note" : 70,
					"velocity" : 55
				}
			]
		},
		{
			"timestamp" : 1454859889,
			"lat" : "51.9225301",
			"lon" : "4.4787914",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 15
				},
				{
					"note" : 65,
					"velocity" : 11
				},
				{
					"note" : 70,
					"velocity" : 55
				}
			]
		},
		{
			"timestamp" : 1454859900,
			"lat" : "51.923502",
			"lon" : "4.4788023",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 12
				},
				{
					"note" : 65,
					"velocity" : 8
				},
				{
					"note" : 70,
					"velocity" : 62
				}
			]
		},
		{
			"timestamp" : 1454859914,
			"lat" : "51.9232934",
			"lon" : "4.4780654",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 14
				},
				{
					"note" : 65,
					"velocity" : 8
				},
				{
					"note" : 70,
					"velocity" : 60
				}
			]
		},
		{
			"timestamp" : 1454859922,
			"lat" : "51.9233326",
			"lon" : "4.4781485",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 13
				},
				{
					"note" : 65,
					"velocity" : 8
				},
				{
					"note" : 70,
					"velocity" : 60
				}
			]
		},
		{
			"timestamp" : 1454859932,
			"lat" : "51.9233326",
			"lon" : "4.4781485",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 13
				},
				{
					"note" : 65,
					"velocity" : 8
				},
				{
					"note" : 70,
					"velocity" : 60
				}
			]
		},
		{
			"timestamp" : 1454859944,
			"lat" : "51.9236136",
			"lon" : "4.4787197",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 12
				},
				{
					"note" : 65,
					"velocity" : 8
				},
				{
					"note" : 70,
					"velocity" : 63
				}
			]
		},
		{
			"timestamp" : 1454859953,
			"lat" : "51.9236499",
			"lon" : "4.4788289",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 12
				},
				{
					"note" : 65,
					"velocity" : 8
				},
				{
					"note" : 70,
					"velocity" : 63
				}
			]
		},
		{
			"timestamp" : 1454859963,
			"lat" : "51.9235192",
			"lon" : "4.4783343",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 13
				},
				{
					"note" : 65,
					"velocity" : 8
				},
				{
					"note" : 70,
					"velocity" : 62
				}
			]
		},
		{
			"timestamp" : 1454859974,
			"lat" : "51.9239214",
			"lon" : "4.4779373",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 12
				},
				{
					"note" : 65,
					"velocity" : 7
				},
				{
					"note" : 70,
					"velocity" : 64
				}
			]
		},
		{
			"timestamp" : 1454859988,
			"lat" : "51.9239214",
			"lon" : "4.4779373",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 12
				},
				{
					"note" : 65,
					"velocity" : 7
				},
				{
					"note" : 70,
					"velocity" : 64
				}
			]
		},
		{
			"timestamp" : 1454859995,
			"lat" : "51.9238922",
			"lon" : "4.4774895",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 13
				},
				{
					"note" : 65,
					"velocity" : 6
				},
				{
					"note" : 70,
					"velocity" : 63
				}
			]
		},
		{
			"timestamp" : 1454860006,
			"lat" : "51.9239916",
			"lon" : "4.4768892",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 13
				},
				{
					"note" : 65,
					"velocity" : 5
				},
				{
					"note" : 70,
					"velocity" : 63
				}
			]
		},
		{
			"timestamp" : 1454860016,
			"lat" : "51.9241275",
			"lon" : "4.4763258",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 13
				},
				{
					"note" : 67,
					"velocity" : 5
				},
				{
					"note" : 70,
					"velocity" : 62
				}
			]
		},
		{
			"timestamp" : 1454860026,
			"lat" : "51.9242306",
			"lon" : "4.476143",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 13
				},
				{
					"note" : 67,
					"velocity" : 5
				},
				{
					"note" : 70,
					"velocity" : 62
				}
			]
		},
		{
			"timestamp" : 1454860037,
			"lat" : "51.9242306",
			"lon" : "4.476143",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 13
				},
				{
					"note" : 67,
					"velocity" : 5
				},
				{
					"note" : 70,
					"velocity" : 62
				}
			]
		},
		{
			"timestamp" : 1454860047,
			"lat" : "51.9239078",
			"lon" : "4.4755021",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 15
				},
				{
					"note" : 67,
					"velocity" : 6
				},
				{
					"note" : 70,
					"velocity" : 59
				}
			]
		},
		{
			"timestamp" : 1454860058,
			"lat" : "51.9237507",
			"lon" : "4.4753819",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 15
				},
				{
					"note" : 67,
					"velocity" : 6
				},
				{
					"note" : 70,
					"velocity" : 58
				}
			]
		},
		{
			"timestamp" : 1454860068,
			"lat" : "51.9237452",
			"lon" : "4.4745154",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 16
				},
				{
					"note" : 67,
					"velocity" : 8
				},
				{
					"note" : 70,
					"velocity" : 55
				}
			]
		},
		{
			"timestamp" : 1454860081,
			"lat" : "51.9245729",
			"lon" : "4.4743398",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 14
				},
				{
					"note" : 67,
					"velocity" : 8
				},
				{
					"note" : 70,
					"velocity" : 59
				}
			]
		},
		{
			"timestamp" : 1454860089,
			"lat" : "51.9245729",
			"lon" : "4.4743398",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 14
				},
				{
					"note" : 67,
					"velocity" : 8
				},
				{
					"note" : 70,
					"velocity" : 59
				}
			]
		},
		{
			"timestamp" : 1454860100,
			"lat" : "51.9248401",
			"lon" : "4.4739722",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 13
				},
				{
					"note" : 67,
					"velocity" : 9
				},
				{
					"note" : 70,
					"velocity" : 59
				}
			]
		},
		{
			"timestamp" : 1454860110,
			"lat" : "51.9244756",
			"lon" : "4.4719049",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 16
				},
				{
					"note" : 67,
					"velocity" : 13
				},
				{
					"note" : 70,
					"velocity" : 51
				}
			]
		},
		{
			"timestamp" : 1454860122,
			"lat" : "51.9243448",
			"lon" : "4.4709894",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 17
				},
				{
					"note" : 67,
					"velocity" : 14
				},
				{
					"note" : 70,
					"velocity" : 48
				}
			]
		},
		{
			"timestamp" : 1454860131,
			"lat" : "51.9243448",
			"lon" : "4.4709894",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 17
				},
				{
					"note" : 67,
					"velocity" : 14
				},
				{
					"note" : 70,
					"velocity" : 48
				}
			]
		},
		{
			"timestamp" : 1454860143,
			"lat" : "51.9241296",
			"lon" : "4.4707568",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 18
				},
				{
					"note" : 67,
					"velocity" : 15
				},
				{
					"note" : 70,
					"velocity" : 46
				}
			]
		},
		{
			"timestamp" : 1454860154,
			"lat" : "51.9240887",
			"lon" : "4.4708",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 18
				},
				{
					"note" : 67,
					"velocity" : 15
				},
				{
					"note" : 70,
					"velocity" : 46
				}
			]
		},
		{
			"timestamp" : 1454860164,
			"lat" : "51.9240887",
			"lon" : "4.4708",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 18
				},
				{
					"note" : 67,
					"velocity" : 15
				},
				{
					"note" : 70,
					"velocity" : 46
				}
			]
		},
		{
			"timestamp" : 1454860174,
			"lat" : "51.9240887",
			"lon" : "4.4708",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 18
				},
				{
					"note" : 67,
					"velocity" : 15
				},
				{
					"note" : 70,
					"velocity" : 46
				}
			]
		},
		{
			"timestamp" : 1454860185,
			"lat" : "51.9240887",
			"lon" : "4.4708",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 18
				},
				{
					"note" : 67,
					"velocity" : 15
				},
				{
					"note" : 70,
					"velocity" : 46
				}
			]
		},
		{
			"timestamp" : 1454860195,
			"lat" : "51.9241142",
			"lon" : "4.4710511",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 18
				},
				{
					"note" : 67,
					"velocity" : 14
				},
				{
					"note" : 70,
					"velocity" : 47
				}
			]
		},
		{
			"timestamp" : 1454860205,
			"lat" : "51.9239991",
			"lon" : "4.4711606",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 18
				},
				{
					"note" : 67,
					"velocity" : 14
				},
				{
					"note" : 70,
					"velocity" : 47
				}
			]
		},
		{
			"timestamp" : 1454860217,
			"lat" : "51.9241575",
			"lon" : "4.4714223",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 17
				},
				{
					"note" : 67,
					"velocity" : 13
				},
				{
					"note" : 70,
					"velocity" : 48
				}
			]
		},
		{
			"timestamp" : 1454860226,
			"lat" : "51.9240667",
			"lon" : "4.4709189",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 18
				},
				{
					"note" : 67,
					"velocity" : 14
				},
				{
					"note" : 70,
					"velocity" : 47
				}
			]
		},
		{
			"timestamp" : 1454860241,
			"lat" : "51.9240667",
			"lon" : "4.4709189",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 18
				},
				{
					"note" : 67,
					"velocity" : 14
				},
				{
					"note" : 70,
					"velocity" : 47
				}
			]
		},
		{
			"timestamp" : 1454860248,
			"lat" : "51.9231387",
			"lon" : "4.4710353",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 21
				},
				{
					"note" : 67,
					"velocity" : 13
				},
				{
					"note" : 70,
					"velocity" : 44
				}
			]
		},
		{
			"timestamp" : 1454860259,
			"lat" : "51.9227566",
			"lon" : "4.4709791",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 22
				},
				{
					"note" : 67,
					"velocity" : 13
				},
				{
					"note" : 70,
					"velocity" : 42
				}
			]
		},
		{
			"timestamp" : 1454860268,
			"lat" : "51.9224044",
			"lon" : "4.471284",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 23
				},
				{
					"note" : 67,
					"velocity" : 12
				},
				{
					"note" : 70,
					"velocity" : 42
				}
			]
		},
		{
			"timestamp" : 1454860281,
			"lat" : "51.9219212",
			"lon" : "4.471293",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 25
				},
				{
					"note" : 67,
					"velocity" : 11
				},
				{
					"note" : 70,
					"velocity" : 40
				}
			]
		},
		{
			"timestamp" : 1454860290,
			"lat" : "51.9219212",
			"lon" : "4.471293",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 25
				},
				{
					"note" : 67,
					"velocity" : 11
				},
				{
					"note" : 70,
					"velocity" : 40
				}
			]
		},
		{
			"timestamp" : 1454860301,
			"lat" : "51.9213327",
			"lon" : "4.4715036",
			"chord" : [
				{
					"note" : 62,
					"velocity" : 27
				},
				{
					"note" : 67,
					"velocity" : 10
				},
				{
					"note" : 70,
					"velocity" : 38
				}
			]
		}
	],
	"recording_id" : "R1454856335270",
	"starttime" : 1454856335
};

router.get("/migrate",(req,res)=>{
	var rec = new Recording({
		    recording_id: obj.recording_id,
		    grid_id: obj.grid_id,
		    description: obj.description,
		    starttime: obj.starttime,
		    endtime: obj.endtime
	});
	rec.save(function (err) {
	  if (err) return handleError(err);
	  console.log("saved recording");
	})

	for(node in obj.nodes) {
		var knot = new Knot({
		    rec_id: obj.recording_id,
		    date: new Date(obj.nodes[node].timestamp*1000),
		    lat: obj.nodes[node].lat,
		    lon: obj.nodes[node].lon,
		    chord: obj.nodes[node].chord
		});
		console.log(obj.nodes[node]);
			knot.save(function (err) {
			  if (err) return handleError(err);
			  console.log("saved knot");
			})
	}

    var query = utils.getQuery(req);
    utils.writeJsonp(res, query["callback"], {status: "OK"});
});

module.exports = router;