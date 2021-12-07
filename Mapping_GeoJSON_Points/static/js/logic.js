// Add console.log to check to see if code is working.
// console.log("working");
// Create the map object with a center at SFO.
// let map = L.map('mapid', {
//     center: [40.7, -94.5],
//     zoom: 4
// });



   
// Add GeoJSON data.
// let sanFranAirport =
// {
//     "type": "FeatureCollection", "features": [{
//         "type": "Feature",
//         "properties": {
//             "id": "3469",
//             "name": "San Francisco International Airport",
//             "city": "San Francisco",
//             "country": "United States",
//             "faa": "SFO",
//             "icao": "KSFO",
//             "alt": "13",
//             "tz-offset": "-8",
//             "dst": "A",
//             "tz": "America/Los_Angeles"
//         },
//         "geometry": {
//             "type": "Point",
//             "coordinates": [-122.375, 37.61899948120117]
//         }
//     }
//     ]
// };

// Grabbing GeoJSON data.
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//         return L.marker(latlng)
//         .bindPopup("<h2>" + feature.properties.name + "</h2>" + "<hr>" + feature.properties.city + ", " + feature.properties.country)
//     }
// }).addTo(map);

// Grabbing our GeoJSON data w/ onEach
// L.geoJson(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h2>" + "Airport code: " + feature.properties.faa + "</h2>" + "<hr>" + "Airport Name: " + feature.properties.name + "</h2>");

//     }
// }).addTo(map);

//tile layer that'll be the background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/outdoors-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
//streets.addTo(map);

// Dark view tile layer
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    Street: streets,
    Dark: dark
};
// Create map object with center, zoom level, and default layer
let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
});
// Pass our map layers into our layers control & add the layers
L.control.layers(baseMaps).addTo(map); 

// Accessing the airport GEOJSON URL
let airportData = "https://raw.githubusercontent.com/rafapeterson/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data, {
        onEachFeature: function(feature, layer) {
            console.log(layer);
            layer.bindPopup("<h2>" + "Airport Code: " + feature.properties.faa + "<hr>" + "Airport Name: " + feature.properties.name + "</h2>");
        }
    }).addTo(map);
});

// Grabbing our GeoJSON data 
// d3.json(airportData, {

// }).then(function (data) {
//     console.log(data);
//     // Creating a GeoJSON layer with the retrieved data.
//     // from https://gis.stackexchange.com/questions/183725/leaflet-pop-up-does-not-work-with-geojson-data
//     L.geoJSON(data, {
//         onEachFeature: function (feature, layer) {
//             console.log(layer);
//             layer.bindPopup("<h2>" + "Airport Code: " + feature.properties.faa + "<hr>" + "Airport Name: " + feature.properties.name + "</h2>");
//         }
//     }).addTo(map);
// });

