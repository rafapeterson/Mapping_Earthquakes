

//tile layer that'll be the background of the map
let light = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
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

// Night View
let night = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/navigation-night-v1',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Day View
let day = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/navigation-day-v1',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
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
    Light: light,
    Dark: dark,
    Night: night,
    Day: day,
    Streets: streets,
    SatelliteStreets: satelliteStreets
};
// Create map object with center, zoom level, and default layer
let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [streets]
});
// Pass our map layers into our layers control & add the layers
L.control.layers(baseMaps).addTo(map); 

// Accessing the airport GEOJSON URL
//let airportData = "https://raw.githubusercontent.com/rafapeterson/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json";

//Accessing the Toronto airline routes GeoJSON URL.
//let torontoData = "https://raw.githubusercontent.com/rafapeterson/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/torontoRoutes.json";

//Accessing Toronto Neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/rafapeterson/Mapping_Earthquakes/Mapping_GeoJSON_Polygons/torontoNeighborhoods.json"


d3.json(torontoHoods).then(function(data) {
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

