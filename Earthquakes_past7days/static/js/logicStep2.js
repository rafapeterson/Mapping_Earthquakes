


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
 // Creating a GeoJSON layer with the retrieved data.
 L.geoJSON(data, {

    // We turn each feature into a circleMarker on the map.
    
    pointToLayer: function(feature, latlng) {
                console.log(data);
                return L.circleMarker(latlng);
            },
            style: styleInfo
        }).addTo(map);
// This function returns the style data for each of the earthquakes we plot on
// the map. We pass the magnitude of the earthquake into a function
// to calculate the radius.
function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: "#ffae42",
      color: "#000000",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    };
  }
  // This function determines the radius of the earthquake marker based on its magnitude.
// Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
function getRadius(magnitude) {
    if (magnitude === 0) {
      return 1;
    }
    return magnitude * 4;
  }
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

