


// Streets View
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Satellite Streets View
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Create a base layer that holds both maps.
let baseMaps = {
 
    "Streets": streets,
    "Satellite": satelliteStreets
};
// Create map object with center, zoom level, and default layer
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});
// Pass our map layers into our layers control & add the layers
L.control.layers(baseMaps).addTo(map); 

// Accessing the earthquake GEOJSON URL

let earthquakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
    // Creating a GeoJSON layer w/ the retrieved data.

d3.json(earthquakeData).then(function(data) {
    console.log(data);
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature: function(feature, layer) {
            console.log(layer);
            layer.bindPopup("<h3>" + "Neighborhood: " + feature.properties.AREA_NAME + "</h3>");
        }
    }).addTo(map);
});
// // Grabbing our GeoJSON data.
// d3.json(torontoData).then(function(data) {
//     console.log(data);
//     //Creating a GeoJSON layer w/ the retrieved data.
//     L.geoJSON(data, {
//         style: myStyle,
//                 onEachFeature: function(feature, layer) {
//                     console.log(layer);
//                     layer.bindPopup("<h2>" + "Airline: " + feature.properties.airline + "<hr>" + "Destination: " + feature.properties.dst + "</h2>");
//                 }
//                 }).addTo(map);
// });

// Create a style for the lines.
let myStyle = {
    color: "blue",
    weight: 1,
    fillColor: "yellow",
    fillOpacity: ".2"
}

