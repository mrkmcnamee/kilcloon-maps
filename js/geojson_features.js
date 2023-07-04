var a85_routing_key_features = [
	{
		'type': 'Feature',
		'properties': {'name': "A85 (Dunshauglin)", 'geotype': "routing key"},
		'geometry': {"type": "Polygon", "coordinates": a85_rk_coordinates}
	}
];

var kilcloon_census_town_features = [
	{
		'type': 'Feature',
		'properties': {'name': "Kilcloon census town", 'geotype': "census town"},
		'geometry': {"type": "Polygon", "coordinates": kilcloon_ct_coordinates}
	}
];

var kilcloon_village_features = [
	{
		"type": "Feature",
		'properties': {'name': "Kilcloon village", 'geotype': "town"},
		"geometry": {"type": "Polygon", "coordinates": kilcloon_tn_coordinates}
	}
];

var barony_features = [
	{
		'type': 'Feature',
		'properties': {'name': "Ratoath", 'geotype': "barony"},
		'geometry': {"type": "Polygon", "coordinates": ratoath_by_coordinates}
	},
	{
		'type': 'Feature',
		'properties': {'name': "Upper Deece", 'geotype': "barony"},
		'geometry': {"type": "Polygon", "coordinates": upper_deece_by_coordinates}
	}
];

var civilparishes_features = [
	{
		'type': 'Feature',
		'properties': {'name': "Balfeaghan", 'geotype': "civil parish"},
		'geometry': {"type": "Polygon", "coordinates": balfeaghan_cp_coordinates}
	},
	{
		'type': 'Feature',
		'properties': {'name': "Kilclone", 'geotype': "civil parish"},
		'geometry': {"type": "Polygon", "coordinates": kilclone_cp_coordinates}
	},
	{
		'type': 'Feature',
		'properties': {'name': "Ballymaglassan", 'geotype': "civil parish"},
		'geometry': {"type": "Polygon", "coordinates": ballymaglassan_cp_coordinates}
	},
	{
		'type': 'Feature',
		'properties': {'name': "Moyglare", 'geotype': "civil parish"},
		'geometry': {"type": "Polygon", "coordinates": moyglare_cp_coordinates}
	},
	{
		'type': 'Feature',
		'properties': {'name': "Rathregan", 'geotype': "civil parish"},
		'geometry': {"type": "Polygon", "coordinates": rathregan_cp_coordinates}
	},
	{
		'type': 'Feature',
		'properties': {'name': "Rodanstown", 'geotype': "civil parish"},
		'geometry': {"type": "Polygon", "coordinates": rodanstown_cp_coordinates}
	}
];

var kilclone_cp_features = [	
	{
		'type':'Feature',
		'properties': {'name': "Collistown", 'geotype': "townland"},
		'geometry': {"type": "Polygon", "coordinates": collistown_tl_coordinates}
	},
	{
		'type':'Feature',
		'properties': {'name': "Kemmins Mill", 'geotype': "townland"},
		'geometry': {"type": "Polygon", "coordinates": kemmins_mill_tl_coordinates}
	},
	{
		'type':'Feature',
		'properties': {'name': "Kilclone", 'geotype': "townland"},
		'geometry': {"type":"Polygon", "coordinates": kilclone_tl_coordinates}
	},
	{
		'type':'Feature',
		'properties': {'name': "Longtown", 'geotype': "townland"},
		'geometry': {"type":"Polygon", "coordinates": longtown_tl_coordinates}
	},
	{
		'type':'Feature',
		'properties': {'name': "Milltown", 'geotype': "townland"},
		'geometry': {"type":"Polygon", "coordinates": milltown_tl_coordinates}
	},
	{
		'type':'Feature',
		'properties': {'name': "Mulhussey", 'geotype': "townland"},
		'geometry': {"type":"Polygon", "coordinates": mulhussey_tl_coordinates}
	},
	{
		'type':'Feature',
		'properties': {'name': "Pagestown", 'geotype': "townland"},
		'geometry': {"type": "Polygon", "coordinates": pagestown_tl_coordinates}
	}
];

var other_cp_features = [
	{
		'type':'Feature',
		'properties': {'name': "Barstown", 'geotype': "townland"},
		'geometry': {"type": "Polygon", "coordinates": barstown_tl_coordinates}
	},
	{
		'type': 'Feature',
		'properties': {'name': "Blackhall Big", 'geotype': "townland"},
		'geometry': {"type": "Polygon", "coordinates": blackhall_big_tl_coordinates}
	},
	{
		'type': 'Feature',
		'properties': {'name': "Blackhall Little", 'geotype': "townland"},
		'geometry': {"type": "Polygon", "coordinates": blackhall_little_tl_coordinates}
	},
	{
		'type':'Feature',
		'properties': {'name': "Brownrath", 'geotype': "townland"},
		'geometry': {"type":"Polygon", "coordinates": brownrath_tl_coordinates}
	},
	{
		'type':'Feature',
		'properties': {'name': "Brownstown", 'geotype': "townland"},
		'geometry': {"type":"Polygon", "coordinates": brownstown_tl_coordinates}
	},
	{
		'type':'Feature',
		'properties': {'name': "Harristown", 'geotype': "townland"},
		'geometry': {"type":"Polygon", "coordinates": harristown_tl_coordinates}
	},
	{
		'type':'Feature',
		'properties': {'name': "Kimmins", 'geotype': "townland"},
		'geometry': {"type": "Polygon", "coordinates": kimmins_tl_coordinates}
	},
	{
		'type':'Feature',
		'properties': {'name': "Kilgraigue", 'geotype': "townland"},
		'geometry': {"type": "Polygon", "coordinates": kilgraigue_tl_coordinates}
	},
	{
		'type': 'Feature',
		'properties': {'name': "Lynaghstown", 'geotype': "townland"},
		'geometry': {"type": "Polygon", "coordinates": lynaghstown_tl_coordinates}
	},
	{
		'type':'Feature',
		'properties': {'name': "Porterstown", 'geotype': "townland"},
		'geometry': {"type": "Polygon", "coordinates": porterstown_tl_coordinates}
	}
];

var schools_features = [
	{
		"type": "Feature",
		'properties': {'name': "Kilcloon National School", 'geotype': "school"},
		"geometry": {
			"type": "Point",
			"coordinates": [-6.58041,53.42598]
		}
	},
	{
		"type": "Feature",
		'properties': {'name': "Mulhussey National School", 'geotype': "school"},
		"geometry": {
			"type": "Point",
			"coordinates": [-6.62208,53.43797]
		}
	},
	{
		"type": "Feature",
		'properties': {'name': "Rathregan National School", 'geotype': "school"},
		"geometry": {
			"type": "Point",
			"coordinates": [-6.53468,53.46868]
		}
	}
];

var churches_features = [
	{
		"type": "Feature",
		'properties': {'name': "Kilcloon Parish Church", 'geotype': "church"},
		"geometry": {
			"type": "Point",
			"coordinates": [-6.57516,53.42244]
		}
	},
	{
		"type": "Feature",
		'properties': {'name': "Rathregan Parish Church", 'geotype': "church"},
		"geometry": {
			"type": "Point",
			"coordinates": [-6.53681,53.47006]
		}
	},
	{
		"type": "Feature",
		'properties': {'name': "The Little Chapel, Kilcock", 'geotype': "church"},
		"geometry": {
			"type": "Point",
			"coordinates": [-6.66436,53.40085]
		}
	}
];

var postoffices_features = [
	{
		"type": "Feature",
		'properties': {'name': "Kilclone Post Office", 'geotype': "post office"},
		"geometry": {
			"type": "Point",
			"coordinates": [-6.59281,53.43273]
		}
	}
];	

var garden_features = [
	{
		"type": "Feature",
		'properties': {'name': "Kilcloon Millenium Garden", 'geotype': "garden"},
		"geometry": {
			"type": "Point",
			"coordinates": [-6.57500,53.42318]
		}
	}
];

var community_centre_features = [
	{
		"type": "Feature",
		'properties': {'name': "Kilcloon Community Centre", 'geotype': "community centre"},
		"geometry": {
			"type": "Point",
			"coordinates": [-6.57597,53.42339]
		}
	}
];

var gaa_features = [
	{
		"type": "Feature",
		'properties': {'name': "Kilcloon GAA Pitch", 'geotype': "gaa pitch"},
		"geometry": {
			"type": "Point",
			"coordinates": [-6.60222,53.43721]
		}
	},
	{
		"type": "Feature",
		'properties': {'name': "Batterstown GAA Pitch", 'geotype': "gaa pitch"},
		"geometry": {
			"type": "Point",
			"coordinates": [-6.54508,53.47313]
		}
	}
];

