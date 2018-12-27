/*
 * Based on https://leafletjs.com/examples/custom-icons/
 * Icons downloaded from https://github.com/pointhi/leaflet-color-markers/
 */
 
var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'icons/marker-shadow.png',
        iconSize: [25, 41],
		shadowSize: [41, 41],
		iconAnchor: [12, 41],
		shadowAnchor: [12, 41],
		popupAnchor: [0,41]
    }
});

var blackIcon = new LeafIcon({iconUrl: 'icons/marker-icon-black.png'});
var blueIcon = new LeafIcon({iconUrl: 'icons/marker-icon-blue.png'});
var greenIcon = new LeafIcon({iconUrl: 'icons/marker-icon-green.png'});
var greyIcon = new LeafIcon({iconUrl: 'icons/marker-icon-grey.png'});
var orangeIcon = new LeafIcon({iconUrl: 'icons/marker-icon-orange.png'});
var redIcon = new LeafIcon({iconUrl: 'icons/marker-icon-red.png'});
var violetIcon = new LeafIcon({iconUrl: 'icons/marker-icon-violet.png'});
var yellowIcon = new LeafIcon({iconUrl: 'icons/marker-icon-yellow.png'});
